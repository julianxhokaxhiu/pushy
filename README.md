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
- Multi level navigation!

##Requirements

- jQuery 2.x/3.x

##Usage

1. Include jQuery

2. Add the stylesheet (`pushy.css` or `pushy.min.css`) in your head and the JS (`pushy.js` or `pushy.min.js`) file in your footer.

3. Insert the following markup into your body.

```html
<!-- Pushy Menu -->
<div class="pushy pushy-static">
    <ul>
        <li><a href="#">Item 1</a></li>
        <li><a href="#">Item 2</a></li>
    </ul>
</div>

<!-- Your Content -->
<div class="pushy-container">
    <!-- Menu Button -->
    <div class="pushy-menu-btn">&#9776; Menu</div>
    <!-- Site Overlay -->
    <div class="pushy-site-overlay"></div>
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

- If you change the width of the ```.pushy``` menu, be sure to update the value `$pushyWidth` in the [SCSS file](scss/pushy.scss).

##Browser Compatibility

| Desktop       | Mobile                                     |
| ------------- | -------------------------------------------|
| IE 9-11       | Chrome                                     |
| Chrome        | Android Browser (Android 4.x)              |
| Firefox       | Safari (iOS 6-8)                           |
| Safari (Mac)  | Internet Explorer (Windows Phone 8.x)      |

##Thanks to

- [HTML5 Boilerplate](http://html5boilerplate.com/)
- [jQuery](http://jquery.com/)
