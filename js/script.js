$(document).ready(function() {
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

    $("#projectsBtn").click(function(){
      $(".overlay2").toggleClass("active2");
    });

    $(".introSkills").click(function(){
      $("#sec1").toggleClass("activePop");
      $("#sec2").toggleClass("activePop");
      $("#arrows1").toggleClass("activePop");
      $("#arrows2").toggleClass("activePop");

      $(".introBtn").toggleClass("active1");
      $(".skillsBtn").toggleClass("active1");

      $(".ttl1").toggleClass("active");
      $(".ttl2").toggleClass("active");
    });
    $(".skillsExp").click(function(){
      $("#sec2").toggleClass("activePop");
      $("#sec3").toggleClass("activePop");
      $("#arrows2").toggleClass("activePop");
      $("#arrows3").toggleClass("activePop");

      $(".skillsBtn").toggleClass("active1");
      $(".expBtn").toggleClass("active1");

      $(".ttl2").toggleClass("active");
      $(".ttl3").toggleClass("active");
    });

    $("#introBtn").click(function(){
      $(".sec").removeClass("activePop");
      $(".arrows").removeClass("activePop");
      $(".txtMenuPop").removeClass("active1");

      $("#sec1").addClass("activePop");
      $("#arrows1").addClass("activePop");
      $(".introBtn").addClass("active1");

      $(".ttl").removeClass("active");
      $(".ttl1").addClass("active");
    });

    $("#skillsBtn").click(function(){
      $(".sec").removeClass("activePop");
      $(".arrows").removeClass("activePop");
      $(".txtMenuPop").removeClass("active1");

      $("#sec2").addClass("activePop");
      $("#arrows2").addClass("activePop");
      $(".skillsBtn").addClass("active1");

      $(".ttl").removeClass("active");
      $(".ttl2").addClass("active");
    });

    $("#expBtn").click(function(){
      $(".sec").removeClass("activePop");
      $(".arrows").removeClass("activePop");
      $(".txtMenuPop").removeClass("active1");

      $("#sec3").addClass("activePop");
      $("#arrows3").addClass("activePop");
      $(".expBtn").addClass("active1");

      $(".ttl").removeClass("active");
      $(".ttl3").addClass("active");
    });

    $(window).scroll(function(){
        var ScrollTop = parseInt($(window).scrollTop());

        if (ScrollTop > 99 * window.innerHeight/100 && ScrollTop < 399 * window.innerHeight/100) {
          $(".lineMenu").addClass("inactive");
          $(".illMenu").removeClass("inactive");
        } else if (ScrollTop > 399 * window.innerHeight/100 && ScrollTop < 699 * window.innerHeight/100) {
          $(".lineMenu").addClass("inactive");
          $(".meMenu").removeClass("inactive");
        } else if (ScrollTop > 699 * window.innerHeight/100 && ScrollTop < 1099 * window.innerHeight/100) {
          $(".lineMenu").addClass("inactive");
          $(".paMenu").removeClass("inactive");
        } else if (ScrollTop > 1099 * window.innerHeight/100 && ScrollTop < 1399 * window.innerHeight/100) {
          $(".lineMenu").addClass("inactive");
          $(".trMenu").removeClass("inactive");
        } else if (ScrollTop > 1399 * window.innerHeight/100 && ScrollTop < 1699 * window.innerHeight/100) {
          $(".lineMenu").addClass("inactive");
          $(".fuMenu").removeClass("inactive");
        } else if (ScrollTop > 1699 * window.innerHeight/100 && ScrollTop < 1999 * window.innerHeight/100) {
          $(".lineMenu").addClass("inactive");
          $(".miMenu").removeClass("inactive");
        } else {
          $(".lineMenu").removeClass("inactive");
        }
    });

    new ClipboardJS('#emailBtn');

    $(".menuIcon").click(function(){
      $(".barUno").toggleClass("change");
      $(".barDuo").toggleClass("change");
    });

    $(".mobileLink").click(function(){
      $(".overlay2").toggleClass("active2");
      $(".barUno").toggleClass("change");
      $(".barDuo").toggleClass("change");
    });
});
