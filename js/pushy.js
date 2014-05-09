/*! Pushy - v0.9.3
* Pushy is a responsive off-canvas navigation menu using CSS transforms & transitions.
* https://github.com/christophery/pushy/
* by Christopher Yee */

$(function() {
	var pushy = $('.pushy'), //menu css class
		body = $('body'),
		container = $('#container'), //container css class
		push = $('.push'), //css class to add pushy capability
		siteOverlay = $('.site-overlay'), //site overlay
		pushyClass = "pushy-left pushy-open", //menu position & menu open class
		pushyActiveClass = "pushy-active", //css class to toggle site overlay
		containerClass = "container-push", //container open class
		pushClass = "push-push", //css class to add pushy capability
		menuBtn = $('.pushy-menu-btn'), //css classes to toggle the menu
		menuSpeed = 200, //jQuery fallback menu speed
		menuWidth = pushy.width() + "px", //jQuery fallback menu width
		onClickHandler; // OnClick Handler

	function togglePushy(){
		body.toggleClass(pushyActiveClass); //toggle site overlay
		pushy.toggleClass(pushyClass);
		container.toggleClass(containerClass);
		push.toggleClass(pushClass); //css class to add pushy capability
	}

	function openPushyFallback(){
		body.addClass(pushyActiveClass);
		pushy.animate({left: "0px"}, menuSpeed);
		container.animate({left: menuWidth}, menuSpeed);
		push.animate({left: menuWidth}, menuSpeed); //css class to add pushy capability
	}

	function closePushyFallback(){
		body.removeClass(pushyActiveClass);
		pushy.animate({left: "-" + menuWidth}, menuSpeed);
		container.animate({left: "0px"}, menuSpeed);
		push.animate({left: "0px"}, menuSpeed); //css class to add pushy capability
	}

	if(Modernizr.csstransforms3d){
		onClickHandler = function(e) {
			e.preventDefault();
			togglePushy();
		}
	}else{
		//jQuery fallback
		pushy.css({left: "-" + menuWidth}); //hide menu by default
		container.css({"overflow-x": "hidden"}); //fixes IE scrollbar issue

		//keep track of menu state (open/close)
		var state = true;

		onClickHandler = function(e) {
			e.preventDefault();
			if (state) {
				openPushyFallback();
				state = false;
			} else {
				closePushyFallback();
				state = true;
			}
		};
	}

	pushy.on('click', 'a.closePushy', onClickHandler);

	//toggle menu
	menuBtn.click(onClickHandler);

	//close menu when clicking site overlay
	siteOverlay.click(onClickHandler);
});
