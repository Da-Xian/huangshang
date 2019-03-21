	function changeOne(){
		var num=document.getElementById("rangeOne");
		var location=document.getElementById("showOne");
		location.value=num.value;
	}
	function changeTwo(){
		var num=document.getElementById("rangeTwo");
		var location=document.getElementById("showTwo");
		location.value=num.value;
	 }
$(function(){
	$(window).resize(function() {
  change();
});
	function change(){
			var fontsize = 16 * $(window).width() / 320;
    			if (fontsize > 67.5) {
        		fontsize = 67.5;
    		}
    		$('html').css('font-size', fontsize);
		}
		change();
    		//判断全面屏手机
//  		if($(window).width() === 375 && $(window).height() >= 668){
//  			$(".superBg").css("height","43.2rem");
//  		}if($(window).width()===411 && $(window).height() >= 668){
//  			$(".superBg").css("height","40rem");
//  		}else{
//  			return true;
//  		}
	})
var canvas = document.getElementById("canvasId");
var ctx = canvas.getContext("2d");
var ox = 130;
var oy = 130;
var or = 110;
var br = 15;
var moveFlag = false;

function offset(r,d) {//根据弧度与距离计算偏移坐标
	return {x: -Math.sin(r)*d, y: Math.cos(r)*d};
};

function draw(n) {
	ctx.clearRect(0,0,canvas.width,canvas.height);
//	ctx.strokeStyle = "#99a";
//	ctx.lineWidth = 5;
//	ctx.beginPath();
//	ctx.arc(ox,oy,or,0,2*Math.PI,true);
//	ctx.stroke();
//	ctx.strokeStyle = "#69f";
//	ctx.lineWidth = 5;
//	ctx.beginPath();
//	ctx.arc(ox,oy,or,0.5*Math.PI,(n*2+0.5)*Math.PI,false);
//	ctx.stroke();
//	ctx.fillStyle = "#69f";
//	ctx.font = "80px Arial";
//	ctx.textAlign = "center";
//	ctx.textBaseline = "middle";
//	ctx.fillText(Math.round(n*100)+"%",ox,oy);
	ctx.fillStyle = "white";
	ctx.beginPath();
	var d =  offset(n*2*Math.PI,or);
	ctx.arc(ox+d.x,oy+d.y,br,0,2*Math.PI,true);
	ctx.fill();
}

var on = ("ontouchstart" in document)? {
	start: "touchstart", move: "touchmove", end: "touchend"
} : {
	start: "mousedown", move: "mousemove", end: "mouseup"
};

function getXY(e,obj) {
	var et = e.touches? e.touches[0] : e;
	var x = et.clientX;
	var y = et.clientY;
	return {
		x : x - obj.offsetLeft + (document.body.scrollLeft || document.documentElement.scrollLeft),
		y : y - obj.offsetTop  + (document.body.scrollTop || document.documentElement.scrollTop)
	}
}

canvas.addEventListener(on.start, function(e) {
	moveFlag = true;
}, false);
canvas.addEventListener(on.move, function(e) {
	if (moveFlag) {
		var k = getXY(e,canvas);
		var r = Math.atan2(k.x-ox, oy-k.y);
		draw((Math.PI+r)/(2*Math.PI));
	}
}, false);
canvas.addEventListener(on.end, function(e) {
	moveFlag = false;
}, false);

draw(0);
	

