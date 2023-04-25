$(document).ready(function(){




	$("body").on("click","a",function(){
		$('html,body').animate({scrollTop:0},300);
	});







	$('a[href*=#]:not([href=#])').click(function(){
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		  if (target.length) {
			$('html,body').animate({
			  scrollTop: target.offset().top
			}, 1200);
			return false;
		  }
		}
	});


	




	$("input[type=checkbox]").each(function(){
		if ($(this).prop("checked")==true){
			$(this).closest(".def-label").find(".check-box-icon").addClass("check-box-icon-select");
		}else{
			$(this).closest(".def-label").find(".check-box-icon").removeClass("check-box-icon-select");
		}
	});

	$("body").on("change","input[type=checkbox]",function(){
		if ($(this).prop("checked")==true){
			$(this).closest(".def-label").find(".check-box-icon").addClass("check-box-icon-select");
		}else{
			$(this).closest(".def-label").find(".check-box-icon").removeClass("check-box-icon-select");
		}
	});

	$(".pop-up-document").css({height:$(document).height()});



	/*=======================*/
	/*
	var ddTeacher1=$(".js-dd-teacher-carousel-list-1").owlCarousel({
		items:1,
		navigation:true,
		slideSpeed:800,
		lazyEffect:"fade",
		singleItem:true,
		transitionStyle:"goDown",
		responsive:true,
		afterAction:function(elem){}
	});

	$(".js-dd-t-prev-1").click(function(){
		ddTeacher1.trigger('owl.prev');
		return false;
	});

	$(".js-dd-t-next-1").click(function(){
		ddTeacher1.trigger('owl.next');
		return false;
	});
	*/
	/*=======================*/



	/*=======================*/
	/*
	var ddTeacher2=$(".js-dd-teacher-carousel-list-2").owlCarousel({
		items:1,
		navigation:true,
		slideSpeed:800,
		lazyEffect:"fade",
		singleItem:true,
		transitionStyle:"goDown",
		responsive:true,
		afterAction:function(elem){}
	});

	$(".js-dd-t-prev-2").click(function(){
		ddTeacher2.trigger('owl.prev');
		return false;
	});

	$(".js-dd-t-next-2").click(function(){
		ddTeacher2.trigger('owl.next');
		return false;
	});
	*/
	/*=======================*/


	/*=======================*/
/*
	var ddTeacher3=$(".js-dd-teacher-carousel-list-3").owlCarousel({
		items:1,
		navigation:true,
		slideSpeed:800,
		lazyEffect:"fade",
		singleItem:true,
		transitionStyle:"goDown",
		responsive:true,
		afterAction:function(elem){}
	});

	$(".js-dd-t-prev-3").click(function(){
		ddTeacher3.trigger('owl.prev');
		return false;
	});

	$(".js-dd-t-next-3").click(function(){
		ddTeacher3.trigger('owl.next');
		return false;
	});
	*/
	/*=======================*/


	/*=======================*/
	var videoSlide=$(".video-slide").owlCarousel({
		items:1,
		navigation:true,
		slideSpeed:800,
		lazyEffect:"fade",
		singleItem:true,
		transitionStyle:"goDown",
		responsive:true,
		afterAction:function(elem){}
	});

	$(".wide-slide-prev").click(function(){
		videoSlide.trigger('owl.prev');
		return false;
	});

	$(".wide-slide-next").click(function(){
		videoSlide.trigger('owl.next');
		return false;
	});
	/*=======================*/

	/*=======================*/
	var homeSlider=$(".home-slide-cell").owlCarousel({
		items:1,
		navigation:true,
		slideSpeed:800,
		lazyEffect:"fade",
		singleItem:true,
		transitionStyle:"fadeUp",
		responsive:true,
		afterAction:function(elem){}
	});

	$(".home-slide-prev").click(function(){
		homeSlider.trigger('owl.prev');
		return false;
	});

	$(".home-slide-next").click(function(){
		homeSlider.trigger('owl.next');
		return false;
	});
	/*=======================*/

	/*=======================*/
	var productSlide=$(".product-carousel").owlCarousel({
		items:1,
		navigation:true,
		slideSpeed:800,
		lazyEffect:"fade",
		singleItem:true,
		transitionStyle:"backSlide",
		responsive:true,
		afterAction:function(elem){}
	});

	$(".product-slide-prev").click(function(){
		productSlide.trigger('owl.prev');
		return false;
	});

	$(".product-slide-next").click(function(){
		productSlide.trigger('owl.next');
		return false;
	});
	/*=======================*/

	/*=======================*/
	/*
	var dropDownTeacherCarousel=$(".drop-down-teacher-carousel").owlCarousel({
		items:1,
		navigation:true,
		slideSpeed:800,
		lazyEffect:"fade",
		singleItem:true,
		transitionStyle:"backSlide",
		responsive:true,
		afterAction:function(elem){}
	});

	$(".js-prev-teacher-carousel").click(function(){
		dropDownTeacherCarousel.trigger('owl.prev');
		return false;
	});

	$(".js-next-teacher-carousel").click(function(){
		dropDownTeacherCarousel.trigger('owl.next');
		return false;
	});
	*/
	/*=======================*/


	var owlLessons=$(".lessons-carousel").owlCarousel({
		items:1,
		navigation:true,
		slideSpeed:800,
		lazyEffect:"fade",
		singleItem:true,
		transitionStyle:"goDown",
		//transitionStyle:"fadeUp",
		//transitionStyle:"backSlide",
		//transitionStyle:"fadeUp",
		responsive:true,
		afterAction:function(elem){}
	});



	$(".lessons-slide-prev").click(function(){
		owlLessons.trigger('owl.prev');
		return false;
	});

	$(".lessons-slide-next").click(function(){
		owlLessons.trigger('owl.next');
		return false;
	});

	$(".tb").each(function(){
		$(this).attr("target","_blank");
	});

	var getAlt="",getTitle="";
	$("body").on("mouseenter",".hta",function(){
		tag=$(this);
		getAlt=tag.attr("alt");
		getTitle=tag.attr("title");
		tag.attr("alt","");
		tag.attr("title","");
	});

	$("body").on("mouseleave",".hta",function(){
		tag=$(this);
		tag.attr("alt",getAlt);
		tag.attr("title",getTitle);
	});

	/*
	$('.zoom').elevateZoom({
		cursor:"default",
		scrollZoom:true,
		easing:true
	});
	*/

/*
   $('.listing-list').masonry({
      itemSelector:'.listing-item',
      singleMode:false,
      isResizable:true,
      isAnimated:true,
          animationOptions:{ 
          queue: false,
          duration: 500
      }
    });
*/


		$.fn.preload=function (fn){
		var len=this.length, i=0;
		return this.each(function(){
			var tmp=new Image,self=this;
			if (fn) tmp.onload = function (){
				fn.call(self, 100 * ++i / len, i === len);
			};
			tmp.src = this.src;
			$(this).addClass("item-visible");
		});
	};

	$('img').preload(function(perc,done){});




	var owlDownload=$(".MAIN-HOME-SLIDER-LIST").owlCarousel({
			items:1,
			navigation:true,
			slideSpeed:800,
			lazyEffect : "fade",
			singleItem:true,
			transitionStyle:"fade",
			responsive:true,
			//paginationSpeed:1000,
			//goToFirstSpeed:2000,
			afterAction:function(elem){}
	});


	$(".main-slide-arrow-prev").click(function(){
		owlDownload.trigger('owl.prev');
		return false;
	});

	$(".main-slide-arrow-next").click(function(){
		owlDownload.trigger('owl.next');
		return false;
	});



/*
	var owlDownload2=$(".lessons-list").owlCarousel({
			items:4,
			navigation:true,
			slideSpeed:800,
			lazyEffect : "fade",
			transitionStyle:"fade",
			responsive:true,
			afterAction:function(elem){}
	});


	$(".lessons-slide-prev").click(function(){
		owlDownload2.trigger('owl.prev');
		return false;
	});

	$(".lessons-slide-next").click(function(){
		owlDownload2.trigger('owl.next');
		return false;
	});

*/







	$(".pop-up-layer-document").css({height:$(document).height()});

	$(".def-inp,.def-profile-txt-field").focus(function(){
		$(this).parent().addClass("darkBorder");
		$(this).parent().removeClass("error");
	});

	$(".def-inp,.def-profile-txt-field").blur(function(){
		$(this).parent().removeClass("darkBorder");
	});


	$(".def-checkbox").each(function(numb){
		if ($(this).prop("checked")){
			$(this).closest(".checkbox-label").find(".check-icon").removeClass("ch-none");
		}else{
			$(this).closest(".checkbox-label").find(".check-icon").addClass("ch-none");
		}
	});


	$("body").on("click",".label-txt",function(){
		if ($(this).find(".def-checkbox").prop("checked")){
			$(this).find(".check-icon").removeClass("ch-none");
		}else{
			$(this).find(".check-icon").addClass("ch-none");
		}
	});



	$("body").on("mouseenter",".lesson-figure",function(){
		//$(this).find(".lessons-btn-cell").stop().animate({height:45},300);
	});

	$("body").on("mouseleave",".lesson-figure",function(){
		//$(this).find(".lessons-btn-cell").stop().animate({height:0},300);
	});


/*
	$("body").on("mouseenter",".drop-down-filters-item",function(){
		$(this).find(".drop-down-filter-box-position").css({display:"block"});
		$(this).find(".drop-down-filter-box-position").stop().animate({opacity:1,top:40},300);
	});


	$("body").on("mouseleave",".drop-down-filters-item",function(){
		$(this).find(".drop-down-filter-box-position").stop().animate({opacity:0,top:30},300,function(){
			$(this).css({display:"none"});
		});
	});

*/
	$("body").on("mouseenter",".right-links-item",function(){
		$(this).find(".drop-down-profil").css({display:"block"});
		$(this).find(".drop-down-profil").stop().animate({opacity:1,top:69},300);
	});

	$("body").on("mouseleave",".right-links-item",function(){
		$(this).find(".drop-down-profil").stop().animate({opacity:0,top:50},300,function(){
			$(this).css({display:"none"});
		});
	});





	//LOGIN DROP DOWN DOWN
	$("body").on("mouseenter",".right-links-item",function(){
		$(this).find(".dd-abs").css({display:"block"}).stop().animate({opacity:1,top:57},300);
	});

	$("body").on("mouseleave",".right-links-item",function(){
		$(this).find(".dd-abs").stop().animate({opacity:0,top:47},300,function(){
			$(this).css({display:"none"});
		});
	});
	//LOGIN DROP DOWN DOWN

});