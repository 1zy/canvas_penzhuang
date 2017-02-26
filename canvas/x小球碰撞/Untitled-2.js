// JavaScript Document
var balls=[];
var can;
var ctx;
var w;
var h
window.onload=function(){
	can=document.getElementById("canvas");
	ctx=can.getContext("2d");
	
    w=can.width=1200;
	h=can.height=800;
	
	for(var i=0;i<150;i++){
		var R=Math.floor(Math.random()*255);
		var G=Math.floor(Math.random()*255);
		var B=Math.floor(Math.random()*255);
		//var radius=Math.random()*50+20;
		aball={
			color:"rgb("+R+","+G+","+B+")",
			//radius:radius,
			x:Math.random()*w,
			y:Math.random()*h,
			radius:Math.random()*50+20,
			vx:(Math.random()*5+5)*Math.pow(-1,Math.floor(Math.random()*100)),//-1的奇数和偶数的次方随机
			vy:(Math.random()*5+5)*Math.pow(-1,Math.floor(Math.random()*100)),
			}
		balls[i]=aball;
		// draw()
		 setInterval(function(){draw();update()},500)
		}
	}
function draw(){
	ctx.clearRect(0,0,w,h);
	for(var i=0;i<balls.length;i++){
		ctx.fillStyle=balls[i].color;
		ctx.beginPath();
		ctx.arc(balls[i].x,balls[i].y,balls[i].radius,0,Math.PI*2);
		ctx.fill();
		}
	
	}	
	
function update(){
	for(var i=0;i<balls.length;i++){
		  balls[i].x+=balls[i].vx;
		  balls[i].y+=balls[i].vy;
		  
		  if(balls[i].x-balls[i].radius<=0){
			  balls[i].vx=-balls[i].vx;
			  balls[i].x=balls[i].radius;
		  }
		  if(balls[i].x+balls[i].radius>w){
			   balls[i].vx=-balls[i].vx;
			   balls[i].x=w-balls[i].radius;
			   }
		  if(balls[i].y-balls[i].radius<=0){
			   balls[i].vy=-balls[i].vy;
			   balls[i].y=balls[i].radius;
			  
			  }
			if(balls[i].y+balls[i].radius>h){
			   balls[i].vy=-balls[i].vy;
			   balls[i].y=h-balls[i].radius;
				
				}
		}
	}	
	

	
	
	
	
	
	