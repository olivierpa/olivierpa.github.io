$(document).ready(function(){
	$('[data-toggle="popover"]').popover();

	// var video = document.getElementById("vid1");
	// var bouton = document.getElementById("btnAccordion1");
	// bouton.addEventListener("mouseover", function( event ) {
 	// 	video.src = "";
	// });

	$(".btnAccordion1").on('mouseenter', function() {
	  $(".vid1")[0].load();
	  $(".vid1")[0].pause();
	});
	$(".btnAccordion1").on('mouseout', function() {
		if ($("#item1").hasClass("hidden")) {
			$(".vid1").trigger('play');
		} else {
			$(".vid1")[0].load();
	  		$(".vid1")[0].pause();
		}
	});
	$(".btnAccordion1").on('click', function (event) {
		$(".vid2").trigger('play');
		$(".vid3").trigger('play');
		$("#item2").addClass("hidden");
		$("#item3").addClass("hidden");
		$("#item1").toggleClass("hidden");
	});
	$(".btnAccordion1").on('touchstart', function () {
		if ($("#item1").hasClass("hidden")) {
			$(".vid1")[0].load();
	  		$(".vid1")[0].pause();
		} else {
			$(".vid1").trigger('play');
		}
	});
	$(".btnAccordion1").on('touch', function () {
			$(".vid1").trigger('play');
	});

	$(".btnAccordion2").on('mouseenter', function() {
	  $(".vid2")[0].load();
	  $(".vid2")[0].pause();
	});
	$(".btnAccordion2").on('mouseout', function() {
		if ($("#item2").hasClass("hidden")) {
			$(".vid2").trigger('play');
		} else {
			$(".vid2")[0].load();
	  		$(".vid2")[0].pause();
		}
	});
	$(".btnAccordion2").on('click', function () {
		$(".vid1").trigger('play');
		$(".vid3").trigger('play');
		$("#item1").addClass("hidden");
		$("#item3").addClass("hidden");
		$("#item2").toggleClass("hidden");
	});
	$(".btnAccordion2").on('touchstart', function () {
		if ($("#item2").hasClass("hidden")) {
			$(".vid2")[0].load();
	  		$(".vid2")[0].pause();
		} else {
			$(".vid2").trigger('play');
		}
	});
	$(".btnAccordion2").on('touch', function () {
			$(".vid2").trigger('play');
	});

	$(".btnAccordion3").on('mouseenter', function() {
	  $(".vid3")[0].load();
	  $(".vid3")[0].pause();
	});
	$(".btnAccordion3").on('mouseout', function() {
	  	if ($("#item3").hasClass("hidden")) {
			$(".vid3").trigger('play');
		} else {
			$(".vid3")[0].load();
	  		$(".vid3")[0].pause();
		}
	});
	$(".btnAccordion3").on('click', function () {
		$(".vid1").trigger('play');
		$(".vid2").trigger('play');
		$("#item1").addClass("hidden");
		$("#item2").addClass("hidden");
		$("#item3").toggleClass("hidden");
	});
	$(".btnAccordion3").on('touchstart', function () {
		if ($("#item3").hasClass("hidden")) {
			$(".vid3")[0].load();
	  		$(".vid3")[0].pause();
		} else {
			$(".vid3").trigger('play');
		}
	});
	$(".btnAccordion3").on('touch', function () {
			$(".vid3").trigger('play');
	});

	$(".img1").click(function () {
		$('.carousel-item').carousel();
	});

	$(".btn1").click(function () {
		$(".btn2").removeClass("active");
		$(".btn3").removeClass("active");
		$(".btn4").removeClass("active");
		$(this).addClass("active");
		$('#experiences').addClass("hidden");
		$('#bio').addClass("hidden");
		$('#tools').addClass("hidden");
		$('#skills').removeClass("hidden");
	});
	$(".btn2").click(function () {
		$(".btn1").removeClass("active");
		$(".btn3").removeClass("active");
		$(".btn4").removeClass("active");
		$(this).addClass("active");
		$('#skills').addClass("hidden");
		$('#bio').addClass("hidden");
		$('#tools').addClass("hidden");
		$('#experiences').removeClass("hidden");
	});
	$(".btn3").click(function () {
		$(".btn1").removeClass("active");
		$(".btn2").removeClass("active");
		$(".btn4").removeClass("active");
		$(this).addClass("active");
		$('#skills').addClass("hidden");
		$('#experiences').addClass("hidden");
		$('#tools').addClass("hidden");
		$('#bio').removeClass("hidden");
	});
	$(".btn4").click(function () {
		$(".btn1").removeClass("active");
		$(".btn2").removeClass("active");
		$(".btn3").removeClass("active");
		$(this).addClass("active");
		$('#skills').addClass("hidden");
		$('#experiences').addClass("hidden");
		$('#bio').addClass("hidden");
		$('#tools').removeClass("hidden");
	});
});