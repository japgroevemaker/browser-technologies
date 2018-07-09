# Assingment 3
## Case
A phonelist full of contacts. You need to be able to filter on name and  click on the contact to see details.
[Live demo](https://opdracht3-ngbuabdffj.now.sh)

## Core functionality
You need to be able to quickly search a contact by typing in a name in the searchbar or navigate quickly to the contact by using the letters on the rightside of the screen. When you find the contact you can see his phone number, birthdate and age. You can also click on the button mail me to quickly write an email to the contact.

## Installation
npm install

## Dependencies
```
| Package | Version |     
|---------|---------|
| EJS     | 2.5.8   |  
| Express | 4.16.3  |
```
I also installed ```node-fetch```. With this i can ```fetch``` my api server-side. So even when ```javascript``` has been turned off, i'm still able to look for contacts!

## At first
I didn't want to statically add contacts. But then Krijn noticed that [UInames](https://uinames.com/)  is an API which random generates names and number. That is wat i wanted to do.

## Features
* Searching for contact by searchbar
If javascript is enabled, there is an search bar where you can type in the name you're looking for.

* Searching for contact by letter of the alphabet
If javascript is disabled, a bar with the first letter of the alphabet are displayed. When you click, for example, on the T the page navigates to the contacts which names starts with an T.

* Controlling the page with keyboard
The page must be fully controllable with keyboard.

## Feature detection
### details & summary
I found out that the ```<details>``` and ```<summary>``` tags are not that well [supported](https://caniuse.com/#search=details). For example, they are not supported at all in IE and Edge. But what are the ```<details>``` and ```<summary>``` tags? [can i use](https://caniuse.com/) explains it like this: <details><summary>Click this</summary> The ```<details>``` element generates a simple no-JavaScript widget to show/hide element contents, optionally by clicking on its child ```<summary>``` element.</details>

This is not a real disaster when they are not supported as the browsers shows the hidden items within the ```<details>``` tag. But i wanted the page not to look to diffrent on older browsers, so i wrote feature detection for this.
```js
if (!('open' in document.createElement('details') === true)) {
  // Code
}
```
Finding out how to write the feature detection for the ```details``` tag wasn't easy. I found it on this [page.](http://html5doctor.com/the-details-and-summary-elements/)

### querySelector & querySelectorAll
```querySelector ``` and ```querySelectorAll``` are fully [supported](https://caniuse.com/#search=queryselector) from IE9 on. So i wanted to write a feature detection for that. I have an search function implemented in my page where you can type in an name in the search bar and than it is found. But i only want it to show when ```querySelector``` and ```querySelectorAll``` is supported. So i wrote this.
```js
if (typeof document.querySelectorAll === 'function') {
  // Code
}
```
If it is supported javascript creates an ```input``` element and gives it a class name.
```js
var input = document.createElement('input')
input.setAttribute('type', 'search');
input.setAttribute('placeholder', 'Zoek naar contact')
input.className = 'search'
```

I wanted to let my search function also work on IE9. But when i tested it, i didn't work. And i was wondering why? Because ```querySelectorAll``` is supported by IE9.
Then i looked in the console of IE and it showed this error ``` SCRIPT5007: Unable to get property 'add' of undefined or null reference``` and i discovered that [```classList```](https://caniuse.com/#search=classlist) is not supported in IE9. So i changed ```classList``` to ```className```. Problem solved.

### forEach & for loop
At first i used ```forEach``` for the search function. But then in IE9 my search function didn't work. That is because ```forEach``` is not [supported](https://caniuse.com/#search=foreach). So i wrote feature detection for it.
```js
if (typeof NodeList.prototype.forEach === 'function') {
  // use forEach
} else {
  // use for loop
}
```

### CSS
If the browser supports ```display: flex;``` it is using that.
```CSS
@supports (display: flex){
  #main-content {
    width: 100%;
  }

  .contact-summary img {
    margin: auto 0;
    float: none;
    margin-right: 5%;
    margin-left: 5%;
  }

  .search-box {
    display: flex;
    justify-content: center;
  }
}
```

### ```<nav>```, ```<main>```, ```<section>```
At first i was using fancy HTML tags. But when i noticed that my styling broke i started to check caniuse and noticed that [nav, main and section](https://caniuse.com/#search=nav) are not supported in IE. So i turned all these tags into ```<div>```'s

## Testing
