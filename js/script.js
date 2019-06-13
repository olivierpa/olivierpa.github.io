function typewriter() {
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
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #353535}";
    document.body.appendChild(css);
  };
}

$(document).ready(function() {

    $(window).scroll(function(){
        var ScrollTop = parseInt($(window).scrollTop());

        if (ScrollTop > 50 * window.innerHeight/100) {
          $("#workNav").addClass("active");
        } else {
          $("#workNav").removeClass("active");
        }
    });

    // $(window).scroll(function(){
    //     var ScrollTop = parseInt($(window).scrollTop());
    //
    //     if (ScrollTop < 44 * window.innerHeight/100) {
    //       $("#nameProjectPage").addClass("colorChange");
    //       $("#nav1").addClass("colorChange");
    //       $("#nav2").addClass("colorChange");
    //       $("#logoProjectPage").attr("src", "../img/logo.svg");
    //     } else {
    //       $("#nameProjectPage").removeClass("colorChange");
    //       $("#nav1").removeClass("colorChange");
    //       $("#nav2").removeClass("colorChange");
    //       $("#logoProjectPage").attr("src", "../img/logodark.svg");
    //     }
    // });

    new ClipboardJS('#emailBtn');

    // // $( "#lablaco" ).hover(function() {
    // //   $('body').toggleClass('n1');
    // //   $('body').toggleClass('n0');
    // //   $('#parades').toggleClass('backgroundParades');
    // //   $('#tras').toggleClass('backgroundTras');
    // //   $('#ads').toggleClass('backgroundAds');
    // //   $('#microdoc').toggleClass('backgroundMicrodoc');
    // //   $('#chronopop').toggleClass('backgroundChronopop');
    // //   $('#metabolisme').toggleClass('backgroundMetabolisme');
    // //   $('#illnation').toggleClass('backgroundIllnation');
    // // });
    // $( "#parades" ).hover(function() {
    //   $('body').toggleClass('n2');
    //   $('body').toggleClass('n0');
    //   // $('#lablaco').toggleClass('backgroundLablaco');
    //   $('#tras').toggleClass('backgroundTras');
    //   $('#ads').toggleClass('backgroundAds');
    //   $('#microdoc').toggleClass('backgroundMicrodoc');
    //   // $('#chronopop').toggleClass('backgroundChronopop');
    //   $('#metabolisme').toggleClass('backgroundMetabolisme');
    //   $('#illnation').toggleClass('backgroundIllnation');
    // });
    // $( "#tras" ).hover(function() {
    //   $('body').toggleClass('n3');
    //   $('body').toggleClass('n0');
    //   // $('#lablaco').toggleClass('backgroundLablaco');
    //   $('#parades').toggleClass('backgroundParades');
    //   $('#ads').toggleClass('backgroundAds');
    //   $('#microdoc').toggleClass('backgroundMicrodoc');
    //   // $('#chronopop').toggleClass('backgroundChronopop');
    //   $('#metabolisme').toggleClass('backgroundMetabolisme');
    //   $('#illnation').toggleClass('backgroundIllnation');
    // });
    // // $( "#chronopop" ).hover(function() {
    // //   $('body').toggleClass('n4');
    // //   $('body').toggleClass('n0');
    // //   $('#lablaco').toggleClass('backgroundLablaco');
    // //   $('#parades').toggleClass('backgroundParades');
    // //   $('#tras').toggleClass('backgroundTras');
    // //   $('#ads').toggleClass('backgroundAds');
    // //   $('#microdoc').toggleClass('backgroundMicrodoc');
    // //   $('#metabolisme').toggleClass('backgroundMetabolisme');
    // //   $('#illnation').toggleClass('backgroundIllnation');
    // // });
    // $( "#metabolisme" ).hover(function() {
    //   $('body').toggleClass('n5');
    //   $('body').toggleClass('n0');
    //   // $('#lablaco').toggleClass('backgroundLablaco');
    //   $('#parades').toggleClass('backgroundParades');
    //   $('#tras').toggleClass('backgroundTras');
    //   $('#ads').toggleClass('backgroundAds');
    //   $('#microdoc').toggleClass('backgroundMicrodoc');
    //   // $('#chronopop').toggleClass('backgroundChronopop');
    //   $('#illnation').toggleClass('backgroundIllnation');
    // });
    // $( "#illnation" ).hover(function() {
    //   $('body').toggleClass('n6');
    //   $('body').toggleClass('n0');
    //   // $('#lablaco').toggleClass('backgroundLablaco');
    //   $('#parades').toggleClass('backgroundParades');
    //   $('#tras').toggleClass('backgroundTras');
    //   $('#ads').toggleClass('backgroundAds');
    //   $('#microdoc').toggleClass('backgroundMicrodoc');
    //   // $('#chronopop').toggleClass('backgroundChronopop');
    //   $('#metabolisme').toggleClass('backgroundMetabolisme');
    // });
    // $( "#ads" ).hover(function() {
    //   $('body').toggleClass('n7');
    //   $('body').toggleClass('n0');
    //   // $('#lablaco').toggleClass('backgroundLablaco');
    //   $('#parades').toggleClass('backgroundParades');
    //   $('#tras').toggleClass('backgroundTras');
    //   $('#microdoc').toggleClass('backgroundMicrodoc');
    //   // $('#chronopop').toggleClass('backgroundChronopop');
    //   $('#illnation').toggleClass('backgroundIllnation');
    //   $('#metabolisme').toggleClass('backgroundMetabolisme');
    // });
    // $( "#microdoc" ).hover(function() {
    //   $('body').toggleClass('n8');
    //   $('body').toggleClass('n0');
    //   // $('#lablaco').toggleClass('backgroundLablaco');
    //   $('#parades').toggleClass('backgroundParades');
    //   $('#tras').toggleClass('backgroundTras');
    //   $('#ads').toggleClass('backgroundAds');
    //   // $('#chronopop').toggleClass('backgroundChronopop');
    //   $('#metabolisme').toggleClass('backgroundMetabolisme');
    //   $('#illnation').toggleClass('backgroundIllnation');
    // });
});
