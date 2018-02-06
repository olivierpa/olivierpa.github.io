$(document).ready(function(){
	function vhTOpx(value) {
	  var w = window,
	    d = document,
	    e = d.documentElement,
	    g = d.getElementsByTagName('body')[0],
	    y = w.innerHeight|| e.clientHeight|| g.clientHeight;
	 
	  var result = (y*value)/100;
	  return(result);
	}
	var px = vhTOpx(99);

	$('[data-toggle="tooltip"]').tooltip();

	$('body').scrollgress({
		height: '2vh',
		zIndex: '10',
		color: 'lightgrey'
	});

	'use strict';
  
   var c, currentScrollTop = 0,
       navbar = $('nav');

   $(window).scroll(function () {
      var a = $(window).scrollTop();
      var b = navbar.height();
     
      currentScrollTop = a;
     
      if (c < currentScrollTop && a > b + b) {
        navbar.addClass("scrollUp");
      } else if (c > currentScrollTop && !(a <= b)) {
        navbar.removeClass("scrollUp");
      }

      c = currentScrollTop;

      if ($(".menu-collapsed").hasClass("menu-expanded")){
      	navbar.removeClass("scrollUp");
      }
  	});

	$(".menu-collapsed").click(function() {
	  $(this).toggleClass("menu-expanded");
	});

	$(".circle").click(function() {
		if ($(".menu-collapsed").hasClass("menu-expanded")){
			$(".menu-collapsed").removeClass("menu-expanded");
    	}
	});

	$(".carousel").carousel({interval: 0});

	$(window).scroll(function() {
	    if ($(document).scrollTop() > px && $(document).scrollTop() < px*2) {
	      $(".a").css('background-color', 'gold');
	      $(".a").css('box-shadow', '0px 1px 4px #888');
	    } else {
	      $(".a").css('background-color', 'white');
	      $(".a").css('box-shadow', '0px 0px 0px #fff');
	    }
	});

	$(window).scroll(function() {
	    if ($(document).scrollTop() > px*2 && $(document).scrollTop() < px*3) {
	      $(".b").css('background-color', 'gold');
	      $(".b").css('box-shadow', '0px 1px 4px #888');
	    } else {
	      $(".b").css('background-color', 'white');
	      $(".b").css('box-shadow', '0px 0px 0px #fff');
	    }
	});

	$(window).scroll(function() {
	    if ($(document).scrollTop() > px*3 && $(document).scrollTop() < px*4) {
	      $(".c").css('background-color', 'gold');
	      $(".c").css('box-shadow', '0px 1px 4px #888');
	    } else {
	      $(".c").css('background-color', 'white');
	      $(".c").css('box-shadow', '0px 0px 0px #fff');
	    }
	});

	$(window).scroll(function() {
	    if ($(document).scrollTop() > px*4 && $(document).scrollTop() < px*5) {
	      $(".d").css('background-color', 'gold');
	      $(".d").css('box-shadow', '0px 1px 4px #888');
	    } else {
	      $(".d").css('background-color', 'white');
	      $(".d").css('box-shadow', '0px 0px 0px #fff');
	    }
	});

	$(window).scroll(function() {
	    if ($(document).scrollTop() > px*5 && $(document).scrollTop() < px*6) {
	      $(".e").css('background-color', 'gold');
	      $(".e").css('box-shadow', '0px 1px 4px #888');
	    } else {
	      $(".e").css('background-color', 'white');
	      $(".e").css('box-shadow', '0px 0px 0px #fff');
	    }
	});

	$(window).scroll(function() {
	    if ($(document).scrollTop() > px*6 && $(document).scrollTop() < px*7) {
	      $(".f").css('background-color', 'gold');
	      $(".f").css('box-shadow', '0px 1px 4px #888');
	    } else {
	      $(".f").css('background-color', 'white');
	      $(".f").css('box-shadow', '0px 0px 0px #fff');
	    }
	});

	var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };

    var btn = document.getElementById('btn');
    var clipboard = new Clipboard(btn);
    clipboard.on('success', function(e) {
        console.log(e);
    });
    clipboard.on('error', function(e) {
        console.log(e);
    });

    $('.clickme[data-toggle="tooltip2"]').tooltip({
	    animated: 'fade',
	    placement: 'top',
	    trigger: 'click'
	});

	$('.clickme').mouseleave(function(){
    	$(this).tooltip('hide');
	});

	$('#bio').addClass("show");

	$(".btn1").click(function () {
		$(".btn2").removeClass("active");
		$(".btn3").removeClass("active");
		$(".btn6").removeClass("active");
		$(this).addClass("active");
		$('#experiences').removeClass("show");
		$('#bio').removeClass("show");
		$('#tools').removeClass("show");
		$('#experiences2').removeClass("show");
		$('#tools2').removeClass("show");
	});
	$(".btn2").click(function () {
		$(".btn1").removeClass("active");
		$(".btn3").removeClass("active");
		$(".btn6").removeClass("active");
		$(this).addClass("active");
		$('#experiences').removeClass("show");
		$('#bio').removeClass("show");
		$('#skills').removeClass("show");
		$('#experiences2').removeClass("show");
		$('#skills2').removeClass("show");
	});
	$(".btn3").click(function () {
		$(".btn1").removeClass("active");
		$(".btn2").removeClass("active");
		$(".btn6").removeClass("active");
		$(this).addClass("active");
		// $('#skills').removeClass("show");
		// $('#bio').removeClass("show");
		// $('#tools').removeClass("show");
		// $('#skills2').removeClass("show");
		// $('#tools2').removeClass("show");
	});
	$(".btn4").click(function () {
		$('#experiences2').removeClass("show");

		$('#skills').removeClass("show");
		$('#bio').removeClass("show");
		$('#tools').removeClass("show");
		$('#skills2').removeClass("show");
		$('#tools2').removeClass("show");
	});
	$(".btn5").click(function () {
		$('#experiences').removeClass("show");

		$('#skills').removeClass("show");
		$('#bio').removeClass("show");
		$('#tools').removeClass("show");
		$('#skills2').removeClass("show");
		$('#tools2').removeClass("show");
	});
	$(".btn6").click(function () {
		$(".btn1").removeClass("active");
		$(".btn2").removeClass("active");
		$(".btn3").removeClass("active");
		$(this).addClass("active");
		$('#skills').removeClass("show");
		$('#experiences').removeClass("show");
		$('#tools').removeClass("show");
		$('#skills2').removeClass("show");
		$('#experiences2').removeClass("show");
		$('#tools2').removeClass("show");
	});

	$("#btn1").click(function () {
		if ($(this).hasClass("open")) {
			$(this).removeClass("open");
			document.getElementById("mySidenav1").style.width = "0";
		    document.getElementById("btn1").style.right = "0";
		    document.getElementById("arrow1").innerHTML = "❮<br>more";
		} else{
			$(this).addClass("open");
			document.getElementById("mySidenav1").style.width = "250px";
	    	document.getElementById("btn1").style.right = "250px";
	    	document.getElementById("arrow1").innerHTML = "❯<br>less";
		}
	});

	$("#btn2").click(function () {
		if ($(this).hasClass("open")) {
			$(this).removeClass("open");
			document.getElementById("mySidenav2").style.width = "0";
		    document.getElementById("btn2").style.right = "0";
		    document.getElementById("arrow2").innerHTML = "❮<br>more";
		} else{
			$(this).addClass("open");
			document.getElementById("mySidenav2").style.width = "250px";
	    	document.getElementById("btn2").style.right = "250px";
	    	document.getElementById("arrow2").innerHTML = "❯<br>less";
		}
	});

	$("#btn3").click(function () {
		if ($(this).hasClass("open")) {
			$(this).removeClass("open");
			document.getElementById("mySidenav3").style.width = "0";
		    document.getElementById("btn3").style.right = "0";
		    document.getElementById("arrow3").innerHTML = "❮<br>more";
		} else{
			$(this).addClass("open");
			document.getElementById("mySidenav3").style.width = "250px";
	    	document.getElementById("btn3").style.right = "250px";
	    	document.getElementById("arrow3").innerHTML = "❯<br>less";
		}
	});

	$("#btn4").click(function () {
		if ($(this).hasClass("open")) {
			$(this).removeClass("open");
			document.getElementById("mySidenav4").style.width = "0";
		    document.getElementById("btn4").style.right = "0";
		    document.getElementById("arrow4").innerHTML = "❮<br>more";
		} else{
			$(this).addClass("open");
			document.getElementById("mySidenav4").style.width = "250px";
	    	document.getElementById("btn4").style.right = "250px";
	    	document.getElementById("arrow4").innerHTML = "❯<br>less";
		}
	});

	$("#btn5").click(function () {
		if ($(this).hasClass("open")) {
			$(this).removeClass("open");
			document.getElementById("mySidenav5").style.width = "0";
		    document.getElementById("btn5").style.right = "0";
		    document.getElementById("arrow5").innerHTML = "❮<br>more";
		} else{
			$(this).addClass("open");
			document.getElementById("mySidenav5").style.width = "250px";
	    	document.getElementById("btn5").style.right = "250px";
	    	document.getElementById("arrow5").innerHTML = "❯<br>less";
		}
	});

	$("#btn6").click(function () {
		if ($(this).hasClass("open")) {
			$(this).removeClass("open");
			document.getElementById("mySidenav6").style.width = "0";
		    document.getElementById("btn6").style.right = "0";
		    document.getElementById("arrow6").innerHTML = "❮<br>more";
		} else{
			$(this).addClass("open");
			document.getElementById("mySidenav6").style.width = "250px";
	    	document.getElementById("btn6").style.right = "250px";
	    	document.getElementById("arrow6").innerHTML = "❯<br>less";
		}
	});

	$('[data-toggle="popover"]').popover(); 
});