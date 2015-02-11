/*! Pushy-Reloaded
* Pushy is a responsive off-canvas navigation menu using CSS transforms & transitions.
* https://github.com/julianxhokaxhiu/pushy-reloaded/
* by Christopher Yee - Julian Xhokaxhiu */

(function($) {
	$(function(){
		var $body = $('body'),
  			$pushy = $('.pushy'), //menu css class
  			$container = $('.pushy-container'), //container css class
  			$siteOverlay = $('.pushy-site-overlay'), //site overlay
  			$menuBtn = $('.pushy-menu-btn'), //css classes to toggle the menu
  			pushyActiveClass = 'pushy-active', //css class to toggle site overlay
  			onClickHandler = function (e) {
  				e.preventDefault();
  				$body.toggleClass(pushyActiveClass); //toggle site overlay
  			}

		// Close pushy if a specified item has 'closePushy' class
		$pushy
    .removeClass('pushy-static')
		.on('click', 'a.closePushy', onClickHandler)
    .on('click', '.pushy-close-submenu', function (e) {
      var $this = $(this);

      $this
      .closest('.pushy-open')
      .removeClass('pushy-open');
    })
    .on('click', 'li > a', function (e) {
      var $this = $(this),
          parent = $this.parent(),
          openClass = 'pushy-open',
          isOpen = parent.hasClass( openClass );

      if ( $this.nextAll('.pushy-submenu').length ) {
        e.stopPropagation();
        e.preventDefault();

        parent
        .toggleClass( openClass, !isOpen )
        .siblings()
        .removeClass( openClass );
      }
    })

		//toggle menu
		$menuBtn
		.on('click', onClickHandler);

		//close menu when clicking site overlay
		$siteOverlay
		.on('click', onClickHandler);
	});
})(jQuery);
