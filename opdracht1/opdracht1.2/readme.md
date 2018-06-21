# Opdracht 1.2 - Fork je OBA.
The idea was that we forked the in one week made OBA app to see how accessible it is.

[live Demo](https://japgroevemaker.github.io/browser-technologies/opdracht1/opdracht1.2/index.html)

## Demolishing the app:
### How does the app work?
I designed and build an photo archive of Amsterdam with the pictures we received from the OBA. The idea is that you type in an Amsterdam related searchword and when you hit ENTER it searches the database for images with that particular word. So for example, if i search for "Rokin" it displays all images with the word Rokin in it.
![Works](https://github.com/japgroevemaker/browser-technologies/blob/master/opdracht1/opdracht1.2/image/oba_work1.jpg)
When you click an image, an black box will display. The black box shows the image, the title, the owner, the date and the archive it comes from. There is also an link to the sourcepage.
![Works](https://github.com/japgroevemaker/browser-technologies/blob/master/opdracht1/opdracht1.2/image/oba_work2.jpg)

### Javascript
The moment i disabled Javascript, nothing really happens. It doesn't searches for images like it used to do when Javascript is enabled. It also refreshes the page everytime i hit ENTER because the ``` preventDefault()``` is also disabled.
![Javascript](https://github.com/japgroevemaker/browser-technologies/blob/master/opdracht1/opdracht1.2/image/oba_javascript.jpg)
##### solution
I should make this an server-side app. When i render everything on the server, it will still work when JavaScript is Disabled

### Images
Since my OBA app is made to display images, it is also useless when i disable images. It only shows the borders i had putted on every image. It does include the ```alt=""``` tag. When i hover an image, my cursor becomes an pointer but when i click nothing happens.
![image](https://github.com/japgroevemaker/browser-technologies/blob/master/opdracht1/opdracht1.2/image/oba_image.jpg)
##### solution
As this website is pretty useless when images are disabled, there is no real solution i can think of that will fix this issue.

### Color
When i turn off the colors in my app, all the functionallities still work. Although you can not distinguish grayscale photos or color photos. You can also go to [Toptal](https://www.toptal.com/designers/colorfilter?orig_uri=https://japgroevemaker.github.io/project1-quick-hack-prototype/index.html&process_type=protan) where you can see diffrent varieties on color blindness.
![color](https://github.com/japgroevemaker/browser-technologies/blob/master/opdracht1/opdracht1.2/image/OBA_color.jpg)
##### solution
I think that when i add a little more contrast everything would be more readable.

### Mouse/Trackpad
When i enter the zero-state of my app i can navigate myself to the searchbar with TAB. When i typed in a search term i can hit enter and it starts searching for images. I can scroll through the images with the space-bar, but none of the images has an focus state. So i can see all the images, but i can't select any of them as they lack an focus state. Only the search-bar and the button have an focus state.
![Keyboard](https://github.com/japgroevemaker/browser-technologies/blob/master/opdracht1/opdracht1.2/image/OBA-focus.jpg)
##### solution
I should fix focus states for all the images so that you can click them.

### Screenreader
When i tried the screanreader in the zero-state, it read all what is on the page. But when i searched for a word, it didn't read the ```alt=""``` tags for example. But when i clicked on a image it reads whats in the black box. But this is very hard to understand for someone who is blind.
##### solution
I should optimalize it more for screenreaders. What it reads now is not bad, but i can do better.

### Cookies
When i disabled the cache in the inspect modus of google chrome, and typed in the search term "Rokin" it took a long time to load all the images.
![Disabled Cache](https://github.com/japgroevemaker/browser-technologies/blob/master/opdracht1/opdracht1.2/image/OBA_cookies_off.jpg)
But when i putted the cache back on, it was a lot faster.
![enabled Cache](https://github.com/japgroevemaker/browser-technologies/blob/master/opdracht1/opdracht1.2/image/OBA_cookies_on.jpg)
##### solution
As the images are rendered on user input, it is very difficult to change this. You never know what an user is going to search for. So i don't know a real solution to this problem.

### Internet
When i turn off the internet, nothing happens when i type in an search term. It constantly shows the loading circle, but the app gives you no feedback about the lost internet connection.
![Internet](https://github.com/japgroevemaker/browser-technologies/blob/master/opdracht1.2/opdracht1.2/image/OBA_internet.jpg)
##### solution
I should give the user feedback about the lost internet connection.

## Device tests
The first phone i tested didn't really do anything. My styling wasn't like i made it and when i typed in a search term, the page refreshed.
![Test](https://github.com/japgroevemaker/browser-technologies/blob/master/opdracht1/opdracht1.2/image/phones&ipad.jpg)

The second phone i tested worked better. It actually did everything the app was made for!
![test](https://github.com/japgroevemaker/browser-technologies/blob/master/opdracht1/opdracht1.2/image/phones&ipad2.jpg)

The third one immediately showed the loading sign. When i typed in a search term, the page refreshed and the load sign kept on turning forever. This was also the case on the fourth one.
![Test](https://github.com/japgroevemaker/browser-technologies/blob/master/opdracht1/opdracht1.2/image/phones&ipad3.jpg)

In the beginning the iPad seemed to work pretty fine. But when i typed in a search term, it refreshed the page and didn't show anything.
![Test](https://github.com/japgroevemaker/browser-technologies/blob/master/opdracht1/opdracht1.2/image/phones&ipad4.jpg)

On the HTC tablet everything worked pretty fine. it did everything the app was made for.
![Test](https://github.com/japgroevemaker/browser-technologies/blob/master/opdracht1/opdracht1.2/image/phones&ipad5.jpg)

The windows tablet did the same as the iPad, didn't show anything. It was pretty hard to navigate te this app because there was no CSS at all on the github website!
![Test](https://github.com/japgroevemaker/browser-technologies/blob/master/opdracht1/opdracht1.2/image/phones&ipad6.jpg)
