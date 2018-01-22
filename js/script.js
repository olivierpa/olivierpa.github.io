$(document).ready(function() {
	$('#post').mouseenter(function(){
		$('#post').attr('src','../img/FakeTwitterPost2.jpg');
	});
	$('#post').mouseleave(function(){
		$('#post').attr('src','../img/FakeTwitterPost.jpg');
	});

	$('#bubble1').mouseenter(function(){
		$('#bubble1').attr('src','img/bubble2.png');
	});
	$('#bubble1').mouseleave(function(){
		$('#bubble1').attr('src','img/bubble1.png');
	});

	var img = $('.image');
	if(img.length > 0){
	    var offset = img.offset();
	    function mouse(evt){
	        var center_x = (offset.left) + (img.width()/2);
	        var center_y = (offset.top) + (img.height()/2);
	        var mouse_x = evt.pageX; var mouse_y = evt.pageY;
	        var radians = Math.atan2(mouse_x - center_x, mouse_y - center_y);
	        var degree = (radians * (180 / Math.PI) * 1) + 90; 
	        img.css('-moz-transform', 'rotate('+degree+'deg)');
	        img.css('-webkit-transform', 'rotate('+degree+'deg)');
	        img.css('-o-transform', 'rotate('+degree+'deg)');
	        img.css('-ms-transform', 'rotate('+degree+'deg)');
	    }
	    $(document).mousemove(mouse);
	}

	var img2 = $('.image2');
	if(img2.length > 0){
	    var offset = img2.offset();
	    function mouse(evt){
	        var center_x = (offset.left) + (img2.width()/2);
	        var center_y = (offset.top) + (img2.height()/2);
	        var mouse_x = evt.pageX; var mouse_y = evt.pageY;
	        var radians = Math.atan2(mouse_x - center_x, mouse_y - center_y);
	        var degree = (radians * (180 / Math.PI) * -1) + 90; 
	        img2.css('-moz-transform', 'rotate('+degree+'deg)');
	        img2.css('-webkit-transform', 'rotate('+degree+'deg)');
	        img2.css('-o-transform', 'rotate('+degree+'deg)');
	        img2.css('-ms-transform', 'rotate('+degree+'deg)');
	    }
	    $(document).mousemove(mouse);
	}
})