// JavaScript Document
var can;
var ctx;
var w;
var h;
window.onload=function(){
	can=document.getElementById("canvas");
	ctx=can.getContext("2d");
	w=can.width;
	h=can.height;
	/*ctx.save();
	   ctx.fillStyle="red";
	   ctx.shadowColor="#ccc";
	   ctx.shadowOffsetX=20;
	   ctx.shadowOffsetY=20;
	   ctx.shadowBlur=5;
	   ctx.fillRect(100,100,400,300);
	ctx.restore();
	
	ctx.beginPath();
	  ctx.lineWidth=5;
	  ctx.strokeStyle="#aaa";
	  ctx.strokeRect(0,0,800,500);*/
	  for(var i=0;i<80;i++){
		  var x=Math.random()*w
		  var y=Math.random()*h
		  r=Math.random()*40+15;
		  var R=Math.floor(Math.random()*255);
		  var G=Math.floor(Math.random()*255);
		  var B=Math.floor(Math.random()*255);
		  /*  if(x>r&&x+r<800&&y>r&&y+r<500){
				drawC(x,y,r,R,G,B)
				}考虑边界*/
	 	 ctx.globalCompositeOperation="compositeStyle";
		  drawC(x,y,r,R,G,B);
		  }
	  	}
	function drawC(x,y,r,R,G,B){
		ctx.save();
		  ctx.beginPath();
		   ctx.arc(x,y,r,0,Math.PI*2);
		   ctx.fillStyle="rgba("+R+","+G+","+B+",0.8)";
		   ctx.fill();
		ctx.restore();
		}