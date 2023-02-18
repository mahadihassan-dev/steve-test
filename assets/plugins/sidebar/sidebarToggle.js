// function arlo_tm_switcher(){
	
// 	"use strict";


	
	
// 	var switcherOpener				= jQuery('.sidebar-btn');
// 	// var switcherIcon				= jQuery('.arlo_tm_leftpart_wrap .arlo_tm_resize i');
// 	// var leftPart					= jQuery('.arlo_tm_leftpart_wrap');
// 	// var rightPart					= jQuery('.arlo_tm_rightpart');
	
// 	switcherOpener.on('click',function(){
// 		if(switcherOpener.hasClass('sidebar-show')){
// 			switcherOpener.removeClass('sidebar-show');
// 			// switcherIcon.removeClass('opened');
// 			// leftPart.removeClass('opened');
// 			// rightPart.removeClass('opened');
// 		}else{
// 			switcherOpener.addClass('sidebar-show');
// 			// switcherIcon.addClass('opened');
// 			// leftPart.addClass('opened');
// 			// rightPart.addClass('opened');
// 		}
		
// 		return false;
		
// 	});
	

// }

$(document).ready(function () {
	$(".sidebar-btn").click(function () {
		$(".dash-main-left").toggleClass('showSidebar');
		$(".dash-main-right ").toggleClass('full-width');
		if($(".dash-main-left-inner").hasClass('show-left-inner')){
			$(".dash-main-left-inner").removeClass('show-left-inner');
			$(".dash-main-left-inner").addClass('hide-left-inner');
		}else{
			$(".dash-main-left-inner").addClass('show-left-inner');
			$(".dash-main-left-inner").removeClass('hide-left-inner');
		}
		if($(".dash-main-left").hasClass('showSidebar')){
			$(".sidebar-btn").style.transform = "rotate(-180deg) !important";
			$(".sidebar-btn").style.right = "-30px !important";
		}
	});
});

// $(".sidebar-btn").click(function () {
// 	$(".dash-main-left").toggleClass('showSidebar');
// });
  