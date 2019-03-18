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
		var fontsize = 16 * $(window).width() / 320;
    		if (fontsize > 67.5) {
        	fontsize = 67.5;
    		}
    		$('html').css('font-size', fontsize);
	})
var canvas = document.getElementById("canvasId");
var ctx = canvas.getContext("2d");
var ox = 100;
var oy = 100;
var or = 90;
var br = 10;
var moveFlag = false;

function offset(r,d) {//根据弧度与距离计算偏移坐标
	return {x: -Math.sin(r)*d, y: Math.cos(r)*d};
};

function draw(n) {
	ctx.clearRect(0,0,canvas.width,canvas.height);
//      ctx.strokeStyle = "yellow";//轨道
//      ctx.lineWidth = 5;
//      ctx.beginPath();
//      ctx.arc(ox,oy,or,0,2*Math.PI,true);//整圆
        ctx.stroke();
        ctx.fillStyle = "white";//滑块
        ctx.beginPath();
        var d =  offset(n*2*Math.PI,or);
        ctx.arc(ox+d.x,oy+d.y,10,0,2*Math.PI,true);
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
	