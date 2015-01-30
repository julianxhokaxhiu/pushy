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
		.on('click', 'a.closePushy', onClickHandler);

		//toggle menu
		$menuBtn
		.on('click', onClickHandler);

		//close menu when clicking site overlay
		$siteOverlay
		.on('click', onClickHandler);

		$pushy
		.removeClass('pushy-static');
	});
})(jQuery);
