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


  // $(function () {
  //   // FireShell


  // });

  LENOVO.Initialize = {
    init: function() {
      LENOVO.Initialize.responsiveClasses();
      //LENOVO.Initialize.responsiveSetup();
      LENOVO.Initialize.bootModal();
		},

		responsiveClasses: function(){

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
      $('.btn-video').click(function () {
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
    }
  };

  LENOVO.documentOnReady = {
    init: function() {
			LENOVO.Initialize.init();
			//IOTAGENT.header.init();
			//IOTAGENT.documentOnReady.windowscroll();
		},
  };

  LENOVO.documentOnLoad = {

  };

  LENOVO.isMobile = {

  };

  LENOVO.documentOnResize = {

  };

  LENOVO.documentOnScroll = {

  };

  $(document).ready( LENOVO.documentOnReady.init );
  // $window.on( 'resize', LENOVO.documentOnResize.init );
  // $window.on( 'scroll', LENOVO.documentOnScroll.init );

})(jQuery);
