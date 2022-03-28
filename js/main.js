jQuery(function($){
	
   $("input[name=phone]").mask("+7(999) 999-99-99");
   
   $('.menu__button').on('click', function() {
	   $('.menublock').toggleClass('visible');
   });
   
   $('.mobi-header__left').on('click', function() {
	   $('.menublock').toggleClass('visible');
   });
   
   
   
   $('.showmore .btn').on('click', function() {
	   $('.news__block').toggleClass('full');
   });
   
});	
$('[data-toggle="modal"]').on('click', function () {	
	$('input').removeClass('error_input'); 
	$('input[name=phone]').val('');
	$('input[name=email]').val('');
	$('input[name=name]').val('');
	$('.modal input[name=block]').val($(this).attr('data-header'));
});

$(document).ready(function(){
	$('.serts__slider').slick({
	  infinite: true,
	  slidesToShow: 4,
	  slidesToScroll: 4,	 
	  arrows: true,
	  dots: true,
/*	  nextArrow: '.serts__arrow_right',
		prevArrow: '.serts__arrow_left',*/
	responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
	]
	});
	
	$('.productsslider__slider').slick({
	  infinite: true,
	  slidesToShow: 4,
	  slidesToScroll: 4,	 
	  arrows: true,
	  dots: true,
	 /* nextArrow: '.serts__arrow_right',
		prevArrow: '.serts__arrow_left',*/
	responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
	]
	});
	
	$('.serts__arrow_left').on('click', function(){
			$(this).parent().parent().find(".slick-slider").slick('slickPrev');
	});

	$('.serts__arrow_right').on('click', function(){
			$(this).parent().parent().find(".slick-slider").slick('slickNext');
	});
	
	
	$('.images__slider').slick({
	  infinite: true,
	  slidesToShow: 1,
		autoplay: true,
		autoplaySpedd: 1000,
	  slidesToScroll: 1,	 
	  arrows: true,
	  dots: false,
/*	  nextArrow: '.serts__arrow_right',
		prevArrow: '.serts__arrow_left'*/
	});
	
	
	/*(function($) {
		$(function() {

		  $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
			$(this)
			  .addClass('active').siblings().removeClass('active')
			  .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
		  });

		});
		})(jQuery);*/

	
	
});