
var express = require('express')
var ejs = require('ejs')
var fetch = require('node-fetch')
var app = express()


app.set('view engine, ejs')
app.use(express.static('static'))

var dataPerLetter = null
var contactList = []

fetch('https://uinames.com/api/?ext&amount=50&region=netherlands')
  .then((resp) => resp.json())
  .then(function(data) {
    jsonList = {}
    jsonList = data
    function compare(a,b) {
       var sortNames = jsonList.sort(function(a, b){
         a = a.name.toLowerCase();
         b = b.name.toLowerCase();

         return a < b ? -1 : a > b ? 1 : 0;
       })
    }

    var sortData = jsonList.sort(compare)

      var firstLetter
      // var contactList = []
      // var dataPerLetter = null

      jsonList.forEach(function(result){
        if(firstLetter !== result.name.charAt(0)) {
          if(dataPerLetter !== null){
            contactList.push(dataPerLetter)
            // console.log(dataPerLetter);
          }
          dataPerLetter = {
            letter: result.name.charAt(0),
            naam: []
          }
        }
        dataPerLetter.naam.push(result)
        firstLetter = result.name.charAt(0)
        // console.log(firstLetter);
      })
      return contactList

  })
  .catch(function (error) {

  })


app.get('/', function(req, res) {
  res.render("index.ejs", {
    data : contactList
  })
});

app.get('/detail', function(req, res) {
  var perfectMatch = []
  const match = contactList.filter((contact) => {
  	return contact.naam.filter((naam) => {
  	var volNaam = naam.name + " " + naam.surname
  	if(volNaam == req.query.id){
      // console.log(naam);
      perfectMatch.push(naam)
      return naam

  	}
  	})[ 0 ]
  })[ 0 ]

  res.render('detail.ejs', {
    data : perfectMatch
  })
})

app.listen(3000)
console.log('App is running on port 3000')
