

if (!('open' in document.createElement('details') === true)) {
  console.log('undefined');
  var link = document.getElementsByTagName('.link');

  for (var i = 0; i < link.length; i++) {
    link[i].className = '';
  }

  var contactDetails = document.getElementById('#contact-details')
  for (var i = 0; i < contactDetails.length; i++) {
    contactDetails[i].className = 'none';
  }
}



if (typeof document.querySelectorAll === 'function') {
  var nav = document.querySelector('#nav');
  nav.className = 'none'
  var contactList = document.querySelector('#main-content');
  var searchBox = document.querySelector('#search-box');
  var section = document.createElement('section')

  section.className = 'search-box'
  var input = document.createElement('input')
  input.setAttribute('type', 'search');
  input.setAttribute('placeholder', 'Zoek naar contact')
  input.className = 'search'

  section.appendChild(input)
  searchBox.appendChild(section)

  var search = document.querySelector('.search');

  search.onkeyup = function() {
    var filter = search.value.toUpperCase()

    var contacts = document.querySelector('#main-content')

    var persons = contacts.querySelectorAll('li')

    var letterIndicators = document.querySelectorAll('.letter-indicator');


    if (typeof NodeList.prototype.forEach === 'function') {
      console.log('forEach');
      persons.forEach(function(contact) {
        search.querySelectorAll('h2');

        if (contact.innerHTML.toUpperCase().indexOf(filter) > -1) {
          contact.className = ''
        } else {
          contact.className = 'none'
        }
      })

      letterIndicators.forEach(function(letter) {
        letter.querySelectorAll('.contact')
        if (letter.innerHTML.toUpperCase().indexOf(filter) > -1) {
          letter.classList.remove('none');
        }
        else {
          letter.classList.add('none')
        }
      })

    } else {
      console.log('for loop');
      for (var i = 0; i < persons.length; i++) {
        persons[i].querySelectorAll('h2')[0];

        if (persons[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
          persons[i].className = ''

        } else {
          persons[i].className = 'none'

        }
      }

      for (var i = 0; i < letterIndicators.length; i++) {

        if (letterIndicators[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
          letterIndicators[i].className = ''
        } else {
          letterIndicators[i].className = 'none'
        }
      }
    }
  }
}
