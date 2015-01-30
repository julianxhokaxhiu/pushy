#Pushy-Reloaded

Pushy is a responsive off-canvas navigation menu using CSS transforms & transitions.

Feel free to [let me know](http://www.twitter.com/julianxhokaxhiu) if you use Pushy in one of your websites.

[View Demo](http://julianxhokaxhiu.github.io/pushy-reloaded/)

##Features

- Uses CSS transforms & transitions.
- Smooth performance on mobile devices.
- Menu closes when a link has <code>closePushy</code> class and it is pressed/clicked.
- Menu closes when the site overlay is selected.
- It's responsive!

##Requirements

- jQuery 1.9+

##Usage

1. Include jQuery & Modernizr.

2. Add the stylesheet (pushy.css) in your head and the JS (pushy.min.js) file in your footer.

3. Insert the following markup into your body.

```html
<!-- Pushy Menu -->
<nav class="pushy pushy-static">
    <ul>
        <li><a href="#">Item 1</a></li>
        <li><a href="#">Item 2</a></li>
    </ul>
</nav>

<!-- Site Overlay -->
<div class="pushy-site-overlay"></div>

<!-- Your Content -->
<div class="pushy-container">
    <!-- Menu Button -->
    <div class="pushy-menu-btn">&#9776; Menu</div>
</div>
```

##Tips

- Add the following to hide horizontal scroll bars when menu is open, disable the webkit tap highlight and fix the focus scrolling in Safari.

```css
html, body{
	overflow-x: hidden; /* prevents horizontal scroll bars */
	-webkit-tap-highlight-color: rgba(0,0,0,0); /* disable webkit tap highlight */
	height: 100%; /* fixes focus scrolling in Safari (OS X) */
}
```

- If you change the width of the ```.pushy``` menu, be sure to update the values in the other CSS selectors too

```css

.pushy{
    width: 400px; /* Changed the width to 400px */
}

.pushy-active {
    .pushy {
        transform: translate3d(-400px,0,0); /* Updated the values */
        /* Don't forget the vendor prefixes */
    }

    .pushy-container {
        transform: translate3d(400px,0,0); /* Updated the values */
        /* Don't forget the vendor prefixes */
    }
}
```

##Browser Compatibility

| Desktop       | Mobile                                     |
| ------------- | -------------------------------------------|
| IE 9-11       | Chrome                                     |
| Chrome        | Android Browser (Android 4.x)              |
| Firefox       | Safari (iOS 6-8)                           |
| Safari (Mac)  | Internet Explorer (Windows Phone 8.x)      |

##Version History

0.9.5
- Remove old IE support
- Rewritten the whole animation logic. Now the class `.pushy-active` will rule the animation in-out of the menu
- Removed some toggle classes from direct elements
- Moved some IDs to classes and renamed other to make them start always with `pushy-*`

0.9.4
- Fix the flickering on first page load (aka please show the menu only when needed). Add `pushy-static` as the latest class to the pushy nav.

0.9.3
- Refactored a little the code to make it more clean and manageable
- Prevent the click behavior for the Menu button

0.9.2
- Added support to close Pushy only when an element has a special class, otherwise not.
- Now the close Pushy event can be binded also to elements that are embedded through AJAX, inside the menu.

0.9.1

- Added support for more menu items (with scroll bar).
- Added the .push CSS class. This adds pushy support to additional HTML elements outside of the container div.
- Fixed menu transition.
- Tested in iOS 7.
- Updated the demo file.

0.9.0

- Added a site overlay when Pushy is toggled
- Fixed horizonal scroll bar issue on mobile devices
- Disabled webkit tap highlight
- Rejiggered the JS file
- Updated to jQuery 1.10.1
- Updated the demo file

0.8.4

- Fixed performance issue with mobile devices
- Updated to jQuery 1.10
- Updated the demo file
- Updated the read me

##Thanks to

- [HTML5 Boilerplate](http://html5boilerplate.com/)
- [jQuery](http://jquery.com/)
