(function ($) {
	"use strict";

	jQuery(document).ready(function ($) {

		$(".embed-responsive iframe").addClass("embed-responsive-item");
		$(".carousel-inner .item:first-child").addClass("active");

		$('[data-toggle="tooltip"]').tooltip();

		//    Remove Active Class from Menu Item
		$(".works_menu ul li span").click(function () {
			$(".works_menu ul li span").removeClass("activate");
		});

		//    Add Active Class to Menu Item
		$(".works_menu ul li span").click(function () {
			$(this).addClass("activate");
		});

	});//document ready End


	jQuery(window).load(function () {

	});//window load End

	jQuery(window).resize(function () {

	});//window resize End


}(jQuery));	