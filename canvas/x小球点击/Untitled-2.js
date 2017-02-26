// JavaScript Document
var balls=[];
var can=document.getElementById("canvas");
var w=can.width
var h=can.height;
var ctx=can.getContext("2d");
  window.onload=function(){	  
	  for(var i=0;i<10;i++){
		   var aball={x:Math.random()*w,y:Math.random()*h,r:Math.random()*50+20}
		   //balls[i]=aball;
		  balls.push(aball);
		  }
	  draw();
	  
	  can.addEventListener("mouseup",detect)
	  }
  function draw(){
	  for(var i=0;i<balls.length;i++){
		  ctx.beginPath();
		  ctx.arc(balls[i].x,balls[i].y,balls[i].r,0,Math.PI*2)
		  ctx.fillStyle="#058";
		  ctx.fill();		  
		  }
	  }
	function detect(event){
		var x=event.clientX-can.getBoundingClientRect().left;
		var y=event.clientY-can.getBoundingClientRect().top;
		
		for(var i=0;i<balls.length;i++){
			ctx.beginPath();
			ctx.arc(balls[i].x,balls[i].y,balls[i].r,0,Math.PI*2);
			if(ctx.isPointInPath(x,y)){
				ctx.fillStyle="red";
				ctx.fill();
				
				}
			
			}
		
		}