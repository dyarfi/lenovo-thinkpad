var $ = jQuery.noConflict();
var LENOVO = LENOVO || {};
var $window = $(window),
	$body = $('body'),
    $wrapper = $('#wrapper'),
    $content = $('#content'),
	$footer = $('#footer'),
    windowWidth = $window.width();

(function ($) {

	'use strict';
	// Document ready function
	LENOVO.Initialize = {

		init: function() {
			LENOVO.Initialize.responsiveClasses();
			LENOVO.Initialize.bootModal();
			LENOVO.Initialize.scrollReveal();
			LENOVO.Initialize.scrollDown();
			LENOVO.Initialize.owlCarousels();
			LENOVO.Initialize.userAgents();
		},

		responsiveClasses: function() {

				if( typeof jRespond === 'undefined' ) {
					console.log('responsiveClasses: jQuery jRespond not Defined.');
					return true;
				}

				var jRes = jRespond([
					{
						label: 'smallest',
						enter: 0,
						exit: 575.98
					},{
						label: 'handheld',
						enter: 576,
						exit: 767.98
					},{
						label: 'tablet',
						enter: 768,
						exit: 991
					},{
						label: 'laptop',
						enter: 992,
						exit: 1199
					},{
						label: 'desktop',
						enter: 1200,
						exit: 10000
					}
				]);
				jRes.addFunc([
					{
						breakpoint: 'desktop',
						enter: function() { $body.addClass('device-lg'); },
						exit: function() { $body.removeClass('device-lg'); }
					},{
						breakpoint: 'laptop',
						enter: function() { $body.addClass('device-md'); },
						exit: function() { $body.removeClass('device-md'); }
					},{
						breakpoint: 'tablet',
						enter: function() { $body.addClass('device-sm'); },
						exit: function() { $body.removeClass('device-sm'); }
					},{
						breakpoint: 'handheld',
						enter: function() { $body.addClass('device-xs'); },
						exit: function() { $body.removeClass('device-xs'); }
					},{
						breakpoint: 'smallest',
						enter: function() { $body.addClass('device-xxs'); },
						exit: function() { $body.removeClass('device-xxs'); }
					}
				]);
		},

		responsiveSetup : function () {
		// var homeSecond = $body.find('section.home-second');
		// var img = homeSecond.attr('data-mobile-img');
		// var height = homeSecond.attr('data-mobile-height');
		// console.log(img);
		// console.log(height);
		// $('.device-xs').find('section.home-second').attr('style','background-image:url(img/home-img-second-mobile.jpg);height:400px;');
		},

		bootModal : function() {
			$('.btn-play-video').click(function () {
				var src = $(this).data('rel');
				// var title = $(this).html();
				var content = $(this).find('span.hide').html();
				$('#BootModal').modal('show');
				// $('#BootModal .modal-title').html('');
				// $('#BootModal .modal-title').html(title);
				$('#BootModal iframe').attr('src', src);
				$('#BootModal .content').text(content);
				return false;
			});
			$('#BootModal button').click(function () {
				$('#BootModal iframe').removeAttr('src');
			});
			$('#BootModal').on('hide.bs.modal', function (e) {
				$('#BootModal iframe').removeAttr('src');
			});
		},

		scrollDown : function() {
			$('.scrolldown a[href*=#]').on('click', function(e) {
				e.preventDefault();
				$('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 800, 'swing');
			});
			/*
			// Waypoints Init
			if (typeof $.fn.waypoint !== 'undefined') {
				var waypoints = $('.animated').waypoint({
				handler: function(direction) {
					var animate = $(this.element).data('animate');
					//var handler = $(this.element).data('context');
					$(this.element).addClass(animate);
				},
				offset: function() {
					return $(this.element).data('offset')
				},
				context: $(this.element).data('context')
				});

				var scrolldown = $('.scrolldown').waypoint({
				handler: function(direction) {
					var animate = $(this.element).data('animate');
					//$(this.element).addClass(animate);
					if (direction === 'down') {
					$(this.element).fadeOut();
					}
					else {
					$(this.element).fadeIn();
					}
				},
				offset: '-50%'
				})
			}
			*/
		},

		owlCarousels : function () {
			// owlCarousel Init
			if (typeof $.fn.owlCarousel !== 'undefined') {
				var owl = $('.main-carousel').owlCarousel({
					animateOut:'fadeOut',
					animateIn:'fadeIn',
					items:1,
					//dotsEach:1,
					// dotData:function(evt) {
					// return evt.item.index;
					// },
					dotData:1,
					dotsEach:1,
					// dotsContainer:"btn btn-danger rounded-circle",
					autoplay:true,
					loop:1,
					margin:0,
					mouseDrag:true,
					touchDrag:false,
					pullDrag:false,
					autoHeight:true,
					// nav:true,
					// navText:['<span class="text-dark">&laquo; Prev</span>','<span class="text-dark">Next &raquo;</span>'],
					responsive:true,
					// responsiveClass:false,
					// lazyLoad:true,
					stagePadding:0//,
					//smartSpeed:450
				});
				owl.on('changed.owl.carousel', function(event) {
					var obj = event.target;
					// Item
					var item = $(obj).find('.owl-caption');
					// Item Head
					var itemHead = item.find('h1,h2,h3,h4');
					// Item Content
					var itemContent = item.find('p');
					// Current Owl slide item
					item.eq(event.item.index)
					.removeClass('d-none')
					.addClass('animated fadeIn');
					// Current Owl slide Heading
					itemHead.eq(event.item.index)
					.removeClass('d-none')
					.addClass('animated fadeInDown');
					// Current Owl slide Content
					itemContent.eq(event.item.index)
					.removeClass('d-none')
					.addClass('animated fadeInUp');
				});
				owl.on('change.owl.carousel', function(event) {
					var obj = event.target;
					// Item
					var item = $(obj).find('.owl-caption').addClass('d-none');
					// Item Head
					var itemHead = item.find('.owl-caption > h1,h2,h3,h4').addClass('d-none');
					// Item Content
					var itemContent = item.find('.owl-caption > p').addClass('d-none');
				});
				// setInterval(function () {
				// 	$(".owl-carousel").each(function () {
				// 	  $(this).data('owlCarousel').autoHeight();
				// 	});
				// },100);
				/*
				var owl = $('.main-carousel').owlCarousel({
					animateOut:'fadeOut',
					animateIn:'fadeIn',
					items:1,
					autoplay:1,
					loop:1,
					margin:0,
					autoHeight:true,
					dots:false,
					nav:false,
					// navText:['<a href="javascript:;"><span class="carousel-control-prev-icon" aria-hidden="true">&nbsp;</span></a>','<a href="javascript:;"><span class="carousel-control-next-icon" aria-hidden="true">&nbsp;</span></a>'],
					lazyLoad:false,
					stagePadding:0,
					smartSpeed:450
				});
				*/
			}
		},

		userAgents : function () {
			var nua = navigator.userAgent;
			//$('#test-nua').html(nua);
			var isSafariWin = (nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('AppleWebKit') > -1 && nua.indexOf('Safari') > -1 && nua.indexOf('Windows') > -1);
			//$('#test-nua').html(safari_windows);
			if(isSafariWin) {
				//$('.handler-box-home').css({'width':'100% !important','height':'300px !important'});
				$('html,body').css({'overflow-x':'hidden'});
				//$('#home').css({'width':'1280px'});
				$('.image-bottom').removeClass('image-bottom').addClass('img-fluid');
				//$('html,body').find('.img-fluid').removeClass('img-fluid');
				//$('.handler-box-home').removeClass('col-12 col-sm-12 col-md-6 col-lg-6').css({'display':'block !important','clear':'both !important'});
				//$('#handler-box-home').css({'width':'300px !important','float':'left !important'});
				//$('#handler-box-home').addClass('d-block');
			}
		// console.log(isSafariWin);
		},

		scrollReveal : function () {
			var config = {
				viewFactor : 0.15,
				duration   : 800,
				distance   : "20px",
				scale      : 0.8,
				reset	   : false,
			}
			// Changing the defaults
			window.sr = ScrollReveal();

			// Customizing a reveal set
			sr.reveal('#home', { duration: 800, useDelay: 'always', delay: 120, origin: 'top', reset: false, distance : "-20px", afterReveal: function (domEl) { $(domEl).css({'z-index':1,'position':'relative'}); $('.scrolldown a span').css({'z-index':2}); } });
			// sr.reveal('#home-second', { duration: 1000, useDelay: 'always', delay: 140, origin: 'bottom', reset: false, distance : "-60px"});
			sr.reveal('#home-second', { duration: 800, useDelay: 'always', delay: 380, origin: 'top', reset: false, distance : "-60px",afterReveal: function (domEl) { $(domEl).css({'z-index':0,'position':'relative'});}});

			sr.reveal('#boxed-one', { duration: 1000, delay: 100, origin: 'top', reset: false});
			sr.reveal('#boxed-two', { duration: 1200, delay: 300, origin: 'top', reset: false});
			sr.reveal('#boxed-three', { duration: 1400, delay: 600, origin: 'top', reset: false});

			// sr.reveal('#home-third', { duration: 1000, useDelay: 'always', delay: 320, origin: 'top', reset: false, distance : "-120px"});

			sr.reveal('#home-fourth', { duration: 1100, useDelay: 'always', delay: 380, origin: 'top', reset: false, distance : "-160px"});

			sr.reveal('#footer', { duration: 1000, useDelay: 'always', delay: 300, origin: 'bottom', reset: false, distance : "-160px"});

			sr.reveal('#trademark', { duration: 1200, delay: 300, origin: 'bottom', reset: false});

		}

	};
	// Document Load function
	LENOVO.InitializeLoad = {
		init: function () {
			LENOVO.InitializeLoad.loadScroll();
		},
		loadScroll : function () {
			$('.scrolldown span').css({'z-index':9999,'position':'absolute'});
		}
	};

	LENOVO.documentOnReady = {
		init: function() {
			LENOVO.Initialize.init();
			//LENOVO.header.init();
			//LENOVO.documentOnReady.windowscroll();
		},
	};

	LENOVO.documentOnLoad = {
		init: function() {
			LENOVO.InitializeLoad.init();
			//LENOVO.header.init();
			//LENOVO.documentOnReady.windowscroll();
		},
	};

	LENOVO.isMobile = { };

	LENOVO.documentOnResize = { };

	LENOVO.documentOnScroll = { };

	$(document).ready( LENOVO.documentOnReady.init );
	$(document).on('load', function () { LENOVO.documentOnLoad.init });

	// $window.on( 'resize', LENOVO.documentOnResize.init );
	// $window.on( 'scroll', LENOVO.documentOnScroll.init );

})(jQuery);
