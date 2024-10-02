/*
	Author: themexriver
	Version: 1.0
*/


(function ($) {
"use strict";


gsap.config({
	nullTargetWarn: false,
});



// smoooth scroll activation start

const lenis = new Lenis({
	duration: .7, 
	easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
	direction: 'vertical', 
	smooth: true, 
	smoothTouch: false, 
  });
  
  function raf(time) {
	lenis.raf(time);
	requestAnimationFrame(raf);
  }
  
  requestAnimationFrame(raf);
  $('a[href^="#"]').on('click', function (e) {
	e.preventDefault(); 
  
	const target = $(this.getAttribute('href')); 
  
	if (target.length) {
	  lenis.scrollTo(target[0], {
		duration: 1.2, 
		easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
	  });
	}
  });




// preloader
document.addEventListener("DOMContentLoaded", function () {

	let preloader = document.querySelector("#preloader");

	window.addEventListener('load', function(){

		if (preloader) {
			preloader.classList.add("preloaded");
			setTimeout(function () {
				  preloader.remove();
			}, 1000 ) ;

		}

        
        if($('.hero-title').length) {
            var st = $(".hero-title");
            if(st.length == 0) return;
            gsap.registerPlugin(SplitText);
            st.each(function(index, el) {
                el.split = new SplitText(el, { 
                    type: "lines",
                    linesClass: "split-line"
                });
                gsap.set(el, { perspective: 400 });
    
    
                if( $(el).hasClass('hero-title') ){
                    gsap.set(el.split.lines, {
                        yPercent: 100,
                        opacity: 0,
                        ease: "Back.easeOut",
                    });
                }
    
                el.anim = gsap.to(el.split.lines, {
                    scrollTrigger: {
                        trigger: el,
                        start: "top 90%",
                    },
                    yPercent: 0,
                    opacity: 1,
                    ease: "Back.easeOut",
                    stagger: 0.2,
                    delay:1.4,
                });
            });
        }

		var lgherot1 = gsap.timeline({
				defaults: { duration:1,
                    ease: "Back.easeOut", } //
			});

        lgherot1.from(".lg-hero-slideup-1 " , { yPercent: 100, stagger: .1, delay: .3 })
        lgherot1.from(".lg-hero-slideup-2 " , { yPercent: 100, stagger: .1 },"<=.2")
        lgherot1.from(".lg-hero-slideup-3 " , { yPercent: 100, stagger: .1 },"<=.2")
        lgherot1.from(".lg-hero-1-content-btn " , { yPercent: 100, stagger: .1 },"<=.2")

		var lgherot2 = gsap.timeline({
				defaults: { duration:1,
                    ease: "Back.easeOut", 
                } //
			});

        lgherot2.from(".lg-hero-1-plug " , { xPercent: 100, stagger: .1, delay: 1.5 })
        lgherot2.from(".lg-hero-1-plug-single" , { scale: 0, stagger: .1 },"<=.2")

        if($('.wa-split-text-3').length) {
            var st = $(".wa-split-text-3");
            if(st.length == 0) return;
            gsap.registerPlugin(SplitText);
            st.each(function(index, el) {
                el.split = new SplitText(el, { 
                    type: "lines",
                    linesClass: "split-line"
                });
                gsap.set(el, { perspective: 400 });
    
    
                if( $(el).hasClass('wa-split-text-3-ani') ){
                    gsap.set(el.split.lines, {
                        yPercent: -100,
                        opacity: 0,
                        ease: "power2.out",
                    });
                }
    
                el.anim = gsap.to(el.split.lines, {
                    scrollTrigger: {
                        trigger: el,
                        start: "top 90%",
                    },
                    yPercent: 0,
                    opacity: 1,
                    ease: "power2.out",
                    stagger: 0.2,
                });
            });
        }

    
	})

});

$(window).scroll(function() {
	if ($(this).scrollTop() > 300){
	$('.sticky_header_1').addClass('sticky1');
	}
	else{
	$('.sticky_header_1').removeClass('sticky1');
	}
});

// Toggle Offcanvas start
$('.offcanvas_toggle').on('click', function() {
    $('.overlay, .offcanvas_box_active').addClass('active');
});

$('.overlay, .offcanvas_box_close').on('click', function() {
    $('.offcanvas_box_active').removeClass('active');
    $('.overlay').removeClass('active');
});

$(document).on('keydown', function(event) {
    if (event.key === 'Escape') {
        $('.offcanvas_box_active').removeClass('active');
        $('.overlay').removeClass('active');
    }
});

$('.offcanvas_box_active a').on('click', function() {
    $('.offcanvas_box_active').removeClass('active');
    $('.overlay').removeClass('active');
});

// mobile-menu
jQuery(".mobile-main-navigation li.dropdown").append('<span class="dropdown-btn"><i class="fa-solid fa-angle-right"></i></span>'),
	jQuery(".mobile-main-navigation li .dropdown-btn").on("click", function () {
		jQuery(this).hasClass("active")
		? (jQuery(this).closest("ul").find(".dropdown-btn.active").toggleClass("active"), jQuery(this).closest("ul").find(".dropdown-menu.active").toggleClass("active").slideToggle())
		: (jQuery(this).closest("ul").find(".dropdown-btn.active").toggleClass("active"),
			jQuery(this).closest("ul").find(".dropdown-menu.active").toggleClass("active").slideToggle(),
			jQuery(this).toggleClass("active"),
			jQuery(this).parent().find("> .dropdown-menu").toggleClass("active"),
			jQuery(this).parent().find("> .dropdown-menu").slideToggle());
});


		
var lgherofeature = gsap.timeline({
	scrollTrigger: {
		trigger: ".lg-hero-1-feature-wrap",
		start: "top 90%",  
        toggleActions: "play reverse play reverse",
        markers: false  ,
	},
	defaults: { duration: 1.2,
        ease: "Back.easeOut", 
    } 
});

lgherofeature.from(".lg-h1-f-slide-right" , { xPercent: -100, opacity: 0, stagger: .2 })
lgherofeature.from(".lg-h1-f-slide-left" , { xPercent: 100, opacity: 0, stagger: .2 },"<=.2")
		
var lgship = gsap.timeline({
	scrollTrigger: {
		trigger: ".lg-multi-scn-1-ship-1",
		start: "top 90%",  
        toggleActions: "play reverse play reverse",
        markers: false  ,
	},
	defaults: { duration: 1.2,
        ease: "power1.out", 
    } 
});

lgship.from(".lg-multi-scn-1-ship-1" , { xPercent: 100, opacity: 0, })

		
var lgfeaturestl = gsap.timeline({
	scrollTrigger: {
		trigger: ".lg-features-1-img",
		start: "top 90%",  
		markers: false  
	},
	defaults: { 
		duration: 1,
		ease: "power4.out", 
	} //
});

lgfeaturestl.from(".lg-features-1-img-1" , { yPercent: 50, })
lgfeaturestl.from(".lg-features-1-img-5" , { yPercent: 100, opacity: 0 }, "<=.3")
lgfeaturestl.from(".lg-features-1-img-2" , { yPercent: 100, opacity: 0 }, "<=.3")
lgfeaturestl.from(".lg-features-1-img-3" , { yPercent: 100, opacity: 0 }, "<=.3")
lgfeaturestl.from(".lg-features-1-img-4" , { yPercent: 100, opacity: 0 }, "<=.3")
lgfeaturestl.from(".lg-features-1-img-6" , { yPercent: 100, opacity: 0 }, "<=.3")

var lgsv1 = gsap.timeline({
	scrollTrigger: {
		trigger: ".lg-save-1-card",
		start: "top 85%",  
        toggleActions: "play reverse play reverse",
        markers: false  ,
	},
	defaults: { duration: 1,
		ease: "Back.easeOut", 
    } 
});

lgsv1.from(".lg-sv1-card-slidedown" , { yPercent: 50,  })
lgsv1.from(".lg-sv1-card-slideup" , { yPercent: -50,  } , "<=")

var lgfooter = gsap.timeline({
	scrollTrigger: {
		trigger: ".lg-footer-img",
		start: "top 85%",  
        toggleActions: "play reverse play reverse",
        markers: false  ,
	},
	defaults: { 
		duration: 1,
		ease: "power4.out", 
    } 
});

lgfooter.from(".lg-footer-img" , { xPercent: 50,  })
lgfooter.from(".lg-footer-slider-down" , { yPercent: -100,  })
lgfooter.from(".lg-footer-slider-up" , { yPercent: 110,  } , "<=.4")






gsap.utils.toArray(".laa-img-parallax").forEach(function(container) {
	let image = container.querySelector("img");

	let tl = gsap.timeline({
		scrollTrigger: {
			trigger: container,
			scrub: .5,
		},
		
		
	}); 
	tl.from(image, {
		yPercent: -15,
		ease: "none",

	}).to(image, {
		yPercent: 15,
		ease: "none",
	}); 
});

// testimonial-1-slider
if($('.iner-page-slide-active').length) {
	let slider = new Swiper('.iner-page-slide-active', {
		loop: true,
		spaceBetween: 0,
		speed: 1000,
		slidesPerView: 1,

		autoplay: {
			delay: 4000,
		},

		navigation: {
			nextEl: ".iner-page-slider-next",
			prevEl: ".iner-page-slider-prev",
		},

		pagination: {
			el: ".iner-page-pagination",
			clickable: true,
		},


		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 3,
			},
			1200: {
				slidesPerView: 4,
			},
			1400: {
				slidesPerView: 4,
			},
			1600: {
				slidesPerView: 5,
			},
		},

	});
}


/*
	marquee-activiton
*/
$('.text-slide-1-active').marquee({
	speed: 50,
	gap: 65,
	delayBeforeStart: 0,
	direction: 'left',
	duplicated: true,
	pauseOnHover: true,
	startVisible:true,
})

// bootstrap-toltip
$(function () {
	$('[data-toggle="tooltip"]').tooltip()
})

/* back-to-top */
var backtotop = $('.scroll_top');

backtotop.on('click', function(e) {
	e.preventDefault();
	$('html, body').animate({scrollTop:0}, '700');
});


/* data-bg-activition */
$("[data-background]").each(function(){
	$(this).css("background-image","url("+$(this).attr("data-background") + ") ")
})


// wow-activation
if($('.wow').length){
	var wow = new WOW(
	{
		boxClass:     'wow',
		animateClass: 'animated',
		offset:       0,
		mobile:       true,
		live:         true
	}
	);
	wow.init();
};



})(jQuery);