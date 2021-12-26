(function(t){"use strict";t.fn.exists=function(){return this.length>0},t(".tm-preloader .tm-button").on("click",function(){t(".tm-preloader").fadeOut()}),t(window).on("load",function(){t(".tm-preloader").fadeOut()});var e={databgImage:function(){t("[data-bgimage]").each(function(){var e=t(this).data("bgimage");t(this).css({"background-image":"url("+e+")"})})},meanmenuActivation:function(){t(".tm-header-nav").meanmenu({meanMenuContainer:".tm-mobilenav",meanScreenWidth:"991",meanMenuOpen:'<i class="ti-menu"></i>',meanMenuClose:'<i class="ti-close"></i>',onePage:!0})},beforeafterImage:function(){t(".tm-beforeafter-image").twentytwenty()},niceSelectActive:function(){t("select").niceSelect()},countdownActivation:function(){t(".tm-countdown").each(function(){var e=t(this),i=t(this).data("countdown");e.countdown(i,function(t){e.html(t.strftime('<div class="tm-countdown-pack tm-countdown-day"><h2 class="tm-countdown-count">%-D</h2><h6>Days</h6></div><div class="tm-countdown-pack tm-countdown-hour"><h2 class="tm-countdown-count">%-H</h2><h6>Hours</h6></div><div class="tm-countdown-pack tm-countdown-minutes"><h2 class="tm-countdown-count">%M</h2><h6>Minutes</h6></div><div class="tm-countdown-pack tm-countdown-seconds"><h2 class="tm-countdown-count">%S</h2><h6>Seconds</h6></div>'))})})},scrollToSection:function(){t(".hash-scroll-link").on("click",function(e){e.preventDefault();var i=t(this),o=t(".tm-header-bottomarea").height();t("html, body").stop().animate({scrollTop:t(i.attr("href")).offset().top-o},1e3)})},sliderActivations:{herosliderSliderActivation:function(){t(".tm-heroslider-slider").slick({infinite:!0,autoplay:!0,pauseOnHover:!1,speed:2e3,autoplaySpeed:5e3,slidesToShow:1,slidesToScroll:1,arrows:!1,fade:!0,dots:!0,rtl:!0})},testimonialSliderActivation:function(){t(".tm-testimonial-slider").slick({infinite:!0,autoplay:!0,pauseOnHover:!1,speed:2e3,autoplaySpeed:5e3,slidesToShow:1,slidesToScroll:1,arrows:!1,dots:!1,rtl:!0})},brandlogoSliderActivation:function(){t(".tm-brandlogo-slider").slick({infinite:!0,autoplay:!0,speed:2e3,autoplaySpeed:2e3,slidesToShow:5,slidesToScroll:1,pauseOnHover:!1,arrows:!1,dots:!1,rtl:!0,responsive:[{breakpoint:1200,settings:{slidesToShow:4,slidesToScroll:1}},{breakpoint:992,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:768,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:420,settings:{slidesToShow:1,slidesToScroll:1}}]})},teamMemberSlider:function(){t(".tm-member-slider").slick({infinite:!0,autoplay:!0,speed:2e3,autoplaySpeed:2e3,slidesToShow:3,slidesToScroll:1,arrows:!1,pauseOnHover:!1,dots:!0,rtl:!0,responsive:[{breakpoint:992,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1}}]})},productDetailsGallery:function(){t(".tm-prodetails-largeimages").slick({slidesToShow:1,slidesToScroll:1,arrows:!1,fade:!0,loop:!1,asNavFor:".tm-prodetails-thumbnails",rtl:!0}),t(".tm-prodetails-thumbnails").slick({slidesToShow:3,slidesToScroll:1,loop:!1,asNavFor:".tm-prodetails-largeimages",dots:!1,centerMode:!0,centerPadding:"50px",arrows:!1,focusOnSelect:!0,rtl:!0})},blogDetailsSliderActivation:function(){t(".tm-blog-imageslider").slick({infinite:!0,autoplay:!0,autoplaySpeed:5e3,speed:500,slidesToShow:1,slidesToScroll:1,arrows:!0,prevArrow:'<button class="slick-prev slick-arrow"><i class="ti ti-angle-left"></i></button>',nextArrow:'<button class="slick-next slick-arrow"><i class="ti ti-angle-right"></i></button>',dots:!1,rtl:!0,responsive:[{breakpoint:992,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1,dots:!1}}]})},init:function(){this.herosliderSliderActivation(),this.testimonialSliderActivation(),this.brandlogoSliderActivation(),this.teamMemberSlider(),this.productDetailsGallery(),this.blogDetailsSliderActivation()}},fancyboxSlick:function(){t("[data-fancybox]").fancybox({beforeShow:function(){t(".tm-product-quickview .tm-prodetails-largeimages").slick("slickNext")}})},ajaxMailchimp:function(){function e(e){"success"===e.result?(t(".tm-mailchimp-success").html(""+e.msg).fadeIn(900),t(".tm-mailchimp-error").fadeOut(400)):"error"===e.result&&t(".tm-mailchimp-error").html(""+e.msg).fadeIn(900)}t("#tm-mailchimp-form").ajaxChimp({language:"en",callback:e,url:"YOUR_MAILCHIMP_URL_HERE"})},searchForm:function(){t(".tm-header-searchtrigger").on("click",function(e){e.preventDefault(),t(".tm-header-searcharea").toggleClass("is-visible")}),t(".tm-header-searchclose").on("click",function(e){e.preventDefault(),t(".tm-header-searcharea").removeClass("is-visible")})},stickyHeader:function(){if(t(".tm-header-sticky").exists()){var e=t(".tm-header").height();t(".tm-heroslider, .tm-breadcrumb-area").css({marginTop:e+"px"}),t(window).on("scroll",function(){var e=t(this).scrollTop();e>250?t(".tm-header").addClass("is-sticky"):t(".tm-header").removeClass("is-sticky")})}},scrollToTop:function(){var e=t("#back-top-top");e.css({visibility:"hidden",opacity:0}),e.on("click",function(){t("html, body").stop().animate({scrollTop:0},1e3)}),t(window).on("scroll",function(){var i=t(window).scrollTop(),o=t(window).height();i>o?e.css({visibility:"visible",opacity:1}):e.css({visibility:"hidden",opacity:0})})},herosliderHeight:function(){var e=t(".tm-header").height();t(".tm-heroslider").css({"min-height":"calc(100vh - "+e+"px)"})},rangeSlider:function(){t(".tm-rangeslider").nstSlider({left_grip_selector:".tm-rangeslider-leftgrip",right_grip_selector:".tm-rangeslider-rightgrip",value_bar_selector:".tm-rangeslider-bar",value_changed_callback:function(e,i,o){t(this).parent().find(".tm-rangeslider-leftlabel").text(i),t(this).parent().find(".tm-rangeslider-rightlabel").text(o)}})},productRatingInput:function(){t(".tm-ratingbox-input").each(function(){t(this).find("span").on("mouseenter",function(){t(".tm-ratingbox-input span").addClass("is-active"),t(this).nextAll("span").removeClass("is-active")})})},productQuantityBox:function(){t(".tm-quantitybox").append('<div class="decrement-button tm-quantitybox-button">-</i></div><div class="increment-button tm-quantitybox-button">+</div>'),t(".tm-quantitybox-button").on("click",function(){var e,i=t(this),o=i.parent().find("input").val();e="+"==i.text()?parseFloat(o)+1:o>1?parseFloat(o)-1:1,i.parent().find("input").val(e)})},instafeedActive:function(){var t=new Instafeed({get:"user",userId:12620117360,accessToken:"12620117360.1677ed0.73a0ac15057c4edcada08b9df21cfa49",resolution:"low_resolution",limit:8,template:'<li><a href="{{link}}" target="_blank"><img src="{{image}}" /><ul class="tm-instaphotos-counter"><li><i class="ti ti-heart"></i> {{likes}}</li><li><i class="ti ti-comment"></i> {{comments}}</li></ul></a></li>'});t.run()},scrollAnimation:function(){var e=new ScrollMagic.Controller;t(".tm-scrollanim").each(function(t){new ScrollMagic.Scene({triggerElement:this,triggerHook:.8,reverse:!1}).setClassToggle(this,"scrollanim-action").addTo(e)})},differentAddressFormToggle:function(){t("#billform-dirrentswitch").on("change",function(){t(this).is(":checked")?t(".tm-checkout-differentform").slideDown():t(".tm-checkout-differentform").slideUp()})},checkoutPaymentMethod:function(){t('.tm-checkout-payment input[type="radio"]').each(function(){t(this).is(":checked")&&t(this).siblings(".tm-checkout-payment-content").slideDown(),t(this).siblings("label").on("click",function(){t('.tm-checkout-payment input[type="radio"]').prop("checked",!1).siblings(".tm-checkout-payment-content").slideUp(),t(this).prop("checked",!0).siblings(".tm-checkout-payment-content").slideDown()})})},loginPassShower:function(){t('input[name="register-pass-show"]').on("change",function(){var e=t('input[name="register-pass"]').attr("type");"password"==e?t('input[name="register-pass"]').attr("type","text"):t('input[name="register-pass"]').attr("type","password")})},scrollSpyActive:function(){var e=t(".tm-header-bottomarea").height();t(".tm-header-nav").scrollspy({offset:-1*(e-1),activeClass:"current",animate:"swing"})},menuOverflow:function(){t(".tm-header-nav ul li").on("mouseenter mouseleave",function(e){if(t("ul",this).length){var i=t("ul:first",this),o=i.offset(),n=o.left-t("body").offset().left,s=i.width();i.find("ul").length&&(s=2*i.width());var a=t("body").width(),r=n+s<=a;r?t(this).removeClass("overflow-element"):t(this).addClass("overflow-element")}})},dropdownHasChildren:function(){t(".tm-header-nav-dropdown ul li").each(function(){t(this).children("ul").length&&t(this).addClass("has-child")})},ajaxContactForm:function(){t(function(){var e=t("#tm-contactform"),i=t(".form-messages");t(e).submit(function(o){o.preventDefault();var n=t(e).serialize();t.ajax({type:"POST",url:t(e).attr("action"),data:n}).done(function(e){t(i).removeClass("error"),t(i).addClass("success"),t(i).text(e),t('#tm-contactform input:not([type="submit"]), #tm-contactform textarea').val("")}).fail(function(e){t(i).removeClass("success"),t(i).addClass("error"),""!==e.responseText?t(i).text(e.responseText):t(i).text("Oops! An error occured and your message could not be sent.")})})})},ajaxAppointmentForm:function(){t(function(){var e=t("#tm-appointment-form"),i=t(".appointment-messages");t(e).submit(function(o){o.preventDefault();var n=t(e).serialize();t.ajax({type:"POST",url:t(e).attr("action"),data:n}).done(function(e){t(i).removeClass("error"),t(i).addClass("success"),t(i).text(e),t('#tm-appointment-form input:not([type="submit"]),  #tm-appointment-form select, #tm-appointment-form textarea').val("")}).fail(function(e){t(i).removeClass("success"),t(i).addClass("error"),""!==e.responseText?t(i).text(e.responseText):t(i).text("Oops! An error occured and your message could not be sent.")})})})},init:function(){e.databgImage(),e.meanmenuActivation(),e.beforeafterImage(),e.niceSelectActive(),e.countdownActivation(),e.scrollToSection(),e.sliderActivations.init(),e.fancyboxSlick(),e.ajaxMailchimp(),e.searchForm(),e.stickyHeader(),e.scrollToTop(),e.herosliderHeight(),e.rangeSlider(),e.productRatingInput(),e.productQuantityBox(),e.instafeedActive(),e.scrollAnimation(),e.differentAddressFormToggle(),e.checkoutPaymentMethod(),e.loginPassShower(),e.scrollSpyActive(),e.menuOverflow(),e.dropdownHasChildren(),e.ajaxContactForm(),e.ajaxAppointmentForm()}};e.init()})(jQuery);