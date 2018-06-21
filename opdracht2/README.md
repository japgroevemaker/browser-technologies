# Hamburger Menu
[Live demo](https://japgroevemaker.github.io/browser-technologies/opdracht2/Hamburgermenu/index.html)
## The basics
An Hamburger menu is immensely populair on small screens these days. When you want to make your own, there are tons of ways to complete that. There are CSS only ways, wich are not that difficult. But the Hamburger menu is also a piece of cake in combination with javascript.

## Sketches
Here i sketched how my burger menu is going to work.
![](https://github.com/japgroevemaker/browser-technologies/blob/master/opdracht2/Hamburgermenu/image/burger.jpg)

## Research
There are a lot of things to find on the internet about the hamburger menu. The hamburger icons has got serveral origins. The burger icons gets its looks because is build up like an hamburger, but the icon also a mathematic symbol of [equivalence](https://www.dailycms.com/artikelen/is-een-hamburger-menu-gebruiksvriendelijk/) . You can use the html shorthand [U+2261](https://en.wikipedia.org/wiki/Triple_bar). Most of the internet users know this symbol, but don't know that it is called hamburger menu. The most common spot to place your hamburger menu is on the [right](http://www.mccormick.northwestern.edu/news/articles/2012/04/daniel-abrams-lefties.html) because 90% of the people world wide use their right hand to control their smartphone. And when you are using your right hand, the right side of the screen is easier to reach.

## Creating the burger - Core functionality
### HTML & CSS
When i found out that you can either make an CSS only or combination CSS and javascript i knew that i'm able to make an good fallback. I wanted the menu to be still accesible when either CSS and Javascript are nog working.
I began with the ```HTML```. I made the header tag with an link tag in it.
```html
<header>
  <a id="top" href="#menu">Menu</a>
</header>
```
Then i placed some dummy content and underneath that i made the actual menu.
```html
<nav role="navigation">

    <ul id="menu">
      <a class="close" href="#top"><p>Sluiten</p></a>
      <li>Alpha</li>
      <li>Bravo</li>
      <li>Charlie</li>
    </ul>
</nav>
```
When i made the ```HTML``` the fallback was my main focus point. That is also the reason why i putted the menu on the bottom of the page because when javascript is not working you can still create
an "of screen" navigation. I made an connection between the ```<a>``` tag in the header and the ```<a>``` tag in the navigation and because the navigation is on the bottom of the screen, you can easily navigate from the top to the bottom and backwards because the ```<a>``` tags have been linked.
![noJS](https://github.com/japgroevemaker/browser-technologies/blob/master/opdracht2/Hamburgermenu/image/noJS.jpg) This is what it looks like when there is no javascript included.
![noCSS](https://github.com/japgroevemaker/browser-technologies/blob/master/opdracht2/Hamburgermenu/image/noCSS.jpg)

### Javascript
Then i started to include Javascript. As i wanted to be really of the screen, i wrote this in javascript.
```js
var nav = document.querySelector('ul');
nav.classList.add('menuCSS');
```
I tell to, when javascript is working, add an class to the ```ul``` element. This is how this class looks like.
```css
.menuCSS {
  display: none;
  position: absolute;
  background-color: #000;
  width: 11em;
  height: 21em;
  top: -1em;
  left: 0;
}
```
As you can see it has a ``` display: none;``` on default so it won't show itself unless it been told to show. To show the nav, i wrote this in javascript.
```js
var btn = document.querySelector('a');

var closeNav = document.getElementsByClassName('close')[0];

function open() {
  nav.style.display = "block";
}

function close() {
  nav.style.display = "none";
}

btn.addEventListener('click', open);
closeNav.addEventListener('click', close);
```
I select the ```<a>``` tag and put it in an variable btn. The next thing i do is making an ```function open()``` There i say that the variable nav, wich selects the ```<ul>``` element, gets an ```display: block;```. At this point, the hamburger menu wil show but it wil not yet close. Underneath the variable btn, i have created an variable closeNav. This selects the element with the class name ```.close``` this class contains nothing as i only need it to select that ```<a>``` tag. Then i make an ```function close()``` where i declare that the variable nav gets ```display: none;``` again. Now the navigation wil hide when i click the button.
![Javascript](https://github.com/japgroevemaker/browser-technologies/blob/master/opdracht2/Hamburgermenu/image/workingJS.jpg)

## Browsers
These are browsers i tested the hamburger menu in. And the list displays in wich browsers the fallback was working.
- [x] Chrome
- [x] Safari
- [x] Firefox
- [x] Opera

![Javascript](https://github.com/japgroevemaker/browser-technologies/blob/master/opdracht2/Hamburgermenu/image/multiplebrowsers.jpg)

## Device tests
The first phone i tested worked pretty well. All the functionalities worked! This was also the case for the second and third smartphone. It also worked the same on the iPad and the HTC tablet and the windows tablet.
![Image](https://github.com/japgroevemaker/browser-technologies/blob/master/opdracht2/Hamburgermenu/image/phones&ipad.jpg)
![Image](https://github.com/japgroevemaker/browser-technologies/blob/master/opdracht2/Hamburgermenu/image/phones&ipad2.jpg)
![Image](https://github.com/japgroevemaker/browser-technologies/blob/master/opdracht2/Hamburgermenu/image/phones&ipad3.jpg)
![Image](https://github.com/japgroevemaker/browser-technologies/blob/master/opdracht2/Hamburgermenu/image/phones&ipad4.jpg)
![Image](https://github.com/japgroevemaker/browser-technologies/blob/master/opdracht2/Hamburgermenu/image/phones&ipad5.jpg)

# Image picker
In ```HTML``` you can use ```<input type="file"``` to input files. I wanted to make an image picker. So that when i click the button i can pick an image i like, and the picked image is being displayed. Displayed in either text or the image itself.
[Live demo](https://japgroevemaker.github.io/browser-technologies/opdracht2/ImagePicker/index.html)

## Skecth
I made an minimal sketch where you can see that you can see the image as an real image and in text.

## Research
On the web you can learn a lot about ```<input type="file"```. According to [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file) you just type in ```<input type="file"``` in your ```HTML``` you can put in all filetypes you want. As i'm only interested in images, i need to include ```accept="image/*"```. You can specify the files you want to input with the ```accept``` attribute. It is pretty nice that the ```HTML``` displays standardly what kind of file you have inputted. So you always get your feedback on the file you uploaded also when CSS and javascript are not functioning.
Not all the mobile browsers support ```<input type="file"```.  
![Image](https://github.com/japgroevemaker/browser-technologies/blob/master/opdracht2/ImagePicker/image/caniuse.jpg)
[Can i use](https://caniuse.com/#search=input)

## Creating the image picker - core functionality
As i wanted it to first work in plain ```HTML``` i started to implement the input element.
```html
<input type="file" accept="image/*">
```
This resulted in this. ![plain](https://github.com/japgroevemaker/browser-technologies/blob/master/opdracht2/ImagePicker/image/plainhtml1.jpg)
The moment i pick an image, it gives me feedback by showing wich image i picked.
![plain](https://github.com/japgroevemaker/browser-technologies/blob/master/opdracht2/ImagePicker/image/plainhtml.jpg)
Then i started to implement some ```javascript``` to display the picked image.
```js
function openFile(event) {
 var input = event.target;

 var reader = new FileReader();
 reader.onload = function() {
   var dataURL = reader.result;
   var output = document.getElementById("output");
   output.src = dataURL
 };
 reader.readAsDataURL(input.files[0]);
}
```
As you can see i made an ```function()``` with an ```event```. I'm also selecting elements from the ```HTML``` wich i haven't declared yet. On the ```<input type="file"``` i need to include an ```onchange``` attribute. This attribute "talks" with my javascript. Then i need to include an ```<img>``` with an ```id="output"``` attribute, because i'm selecting that one in the ```HTML```
So now my ```HTML``` looks like this:
```html
<img id="output" src="image/placeholder.jpg" />
  <form class="" action="" method="">
    <input type="file" onchange="openFile(event)" accept="image/*">
    <input type="submit" />
  </form>
```
As you can see, i have already an image declared the ```src``` attribute at my ```<img>``` tag. javascript changes the ```src="image/placeholder.jpg"``` to the target ```src``` when i select an image. It gives me this result.
![zero](https://github.com/japgroevemaker/browser-technologies/blob/master/opdracht2/ImagePicker/image/zero.jpg) When i select an image, it looks like this:
![zero](https://github.com/japgroevemaker/browser-technologies/blob/master/opdracht2/ImagePicker/image/selected.jpg)

## Feature detection
I implemented feature detection in the ```css```. When ```display: flex;``` is being supported by the browser, he needs to use these lines of code for the ```CSS```
```css
@supports (display: flex) {
  section{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  form{
    margin: 1em;
  }

  img{
    margin: 1em;
  }
}
```

## Browsers
These are browsers i tested the hamburger menu in. And the list displays in wich browsers the fallback was working.
- [x] Chrome
- [x] Safari
- [x] Firefox
- [x] Opera

![multiple](https://github.com/japgroevemaker/browser-technologies/blob/master/opdracht2/ImagePicker/image/multiplebrowsers.jpg)

I noticed one small funny thing, in firefox the button doesn't say: ```bestand kiezen``` but instead of that is says: ```bladeren```. Don't know why this is, but it only is in firefox.

## Device Testing
Unfortunately i wasn't able to test this demo due to a fault in the directory in the opdracht3 folder. Github pages was therefore also not working and i needed to put it on my own domainname...

# Re-sit

## Hamburger menu
Because i didn't implemented feature detection i didn't passed the test. So i started to do some research for a suitable feature detection.

## Feature detection
I ended up on can i use and i started doing research. I thought ```classList``` was a well supported method, but i was [wrong](https://caniuse.com/#search=classlist). So i started to write some feature detection.
```js
if (document.classList == 'undefined') {

  var btn = document.getElementsByTagName("a")[0];

  var closeNav = document.getElementsByClassName('close')[0];


  btn.addEventListener('click', function() {
    nav.style.display = "block";
  });

  closeNav.addEventListener('click', function() {
    nav.style.display = "none";
  });

} else {

  var btn = document.querySelectorAll('a');

  for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function() {

      nav.classList.toggle('block')

    })
  }
}
```
At first i write an ```if``` statement and there i say that if ```document.classList``` is ```'undefined'``` that he needs to run the first line of code. I also used ```getElementsByTagName``` because ```querySelector``` is not always supported. As you can see it are a lot of lines for just displaying a Hamburgermenu. In the ```else``` statement i make it much simpler. I select a ```a``` tags and i make an ```for``` loop. That loops trough al the ```a``` tags in the ```HTML``` after that i add an eventlistener on the var btn and in the event listener i ```toggle``` the class block, which hides and shows the menu.

## Image picker
Here i also didn't implemented any feature detection. So i started doing research on which kind of feature detection i was going to implement.

## Feature detection
I searched and i saw that ```FileReader``` isn't always [supported](https://caniuse.com/#search=FileReader). So i wanted to write an feature detection for that. At first i already had an ```img``` tag inside my ```html``` which holds an placeholder image. Because this is already implemented in the ```HTML``` it will always be displayed, even when ```FileReader``` isn't supported. This is misleading the user. I wanted to change that. So i wrote this:
```js
if (window.FileReader) {
  var inputImg = document.getElementsByTagName('input')[0];
  var box = document.getElementsByTagName('section')[0];

  var placeholder = document.createElement('img');

  placeholder.setAttribute('src', 'image/placeholder.jpg')

  box.appendChild(placeholder)
  box.appendChild(inputImg)

  inputImg.addEventListener('change', function() {
    openFile()
  });

  function openFile() {
    var img = inputImg.files[0]
    var reader = new FileReader();
    reader.readAsDataURL(img);

    reader.onload = function() {
      placeholder.setAttribute('src', reader.result)
    }
  }
}
```
These lines of code tells the browser that if ```FileReader``` is supported, he needs to create an ```img``` element in the ```html```. When the ```img``` element is created the ```src``` of the ```img``` is ```placeholder.jpg```. After that i append the ```img``` tag in the ```html```. After that i select the ```input``` element in the ```html``` and put an eventlistener on it. When this eventlistener is triggered, a function is called which changes the ```src``` of the created ```img``` to the selected ```src``` of the image which is being selected by the user.

##### What about when Javascript is not working then?
When javascript is not working there will obviously no ```img``` tag because that is created within javascript. But the user is still shown which image he has picked because of the ```html``` i wrote.
```html
  <input type="file" accept="image/*">
```
With this line of code the user is only able to select images from his own library. Other file types aren't accepted.

## Sources
* [can i use](https://caniuse.com/)
* [stackoverflow](https://stackoverflow.com/)
* [MDN](https://developer.mozilla.org/nl/)
