
var dom=document.getElementById('myCanvas');
var	width=dom.width;
var	height=dom.height;

var ctx=dom.getContext('2d');
var or=6,oi=4,tr=20,ti=18,t1=null,t2=null;
var x,y;

/*
 * 天空背景
 * */
function sky(){
	ctx.save();
	
	ctx.beginPath();
	var grd=ctx.createLinearGradient(0,0,0,600);
	grd.addColorStop(0,"black");
	grd.addColorStop(1,"#4f6acb");
	ctx.fillStyle=grd;
	ctx.fillRect(0,0,width,height);
	ctx.closePath();
	
	ctx.restore();
}

/**
 * 月亮
 * */
function mom(){
	ctx.save();
	
	ctx.beginPath();
	ctx.fillStyle="#F5E79E";
	ctx.shadowBlur=40;
	ctx.shadowColor="white";
	ctx.arc(300, 80, 40, 0, Math.PI*2,true); 	
	ctx.fill();
	ctx.closePath();
	
	ctx.beginPath();
	ctx.globalAlpha=0.3;
	ctx.fillStyle="#FFFFFF";
	ctx.arc(300, 80, 40, 0, Math.PI*2,true); 	
	ctx.fill();
	ctx.closePath();
	
	ctx.restore();
}

/**
 * 星星
 * */
function star() {
	ctx.save();
	
	ctx.beginPath();
	ctx.fillStyle="#FFFFFF";
    var sx,sy,sr,sign;
    for(var i=1;i<50;i++){
	    sx=Math.random()*width;
	    sy=Math.random()*250;
	    sr=Math.random()*0.5;
	    sign = Math.random() > 0.5 ? 1 : -1
	    sr += sign * 0.4
	    if (sr < 0) {
	         sr = -sr
	    } else if (sr > 1) {
	        sr -= 0.4
	    }
	    ctx.arc(sx, sy, sr, 0, Math.PI*2,true); 
	    ctx.fill();
	    ctx.closePath();
    }
	ctx.restore();	
}

/**
 * 树木
 * */
function tree(){
   ctx.save();
   ctx.beginPath();
   ctx.strokeStyle="#66512C";
   ctx.fillStyle="#2B542C";
   ctx.shadowBlur=40;
   ctx.shadowColor="black";
   ctx.moveTo(50,520);
   ctx.lineTo(80,550);
   ctx.lineTo(64,550);
   ctx.lineTo(80,570);
   ctx.lineTo(20,570);
   ctx.lineTo(36,550);
   ctx.lineTo(20,550);
   ctx.stroke();
   ctx.fill();
   ctx.closePath();
 	
   ctx.beginPath();
   ctx.fillStyle="#66512C";
   ctx.fillRect(40,570,20,40);
   ctx.fill();
   ctx.closePath();
   ctx.restore();
}

/**
 * 人行道路
 * */
function road(){
	ctx.save();
	var ry=600;
	ctx.beginPath();
	ctx.strokeStyle="#66512C";
	ctx.fillStyle="#707781";
	ctx.lineWidth=2;
	ctx.moveTo(0,ry);
	ctx.lineTo(width,ry);
	ctx.fillRect(0,ry,width,height-ry);
	ctx.stroke();
	ctx.fill();
	ctx.closePath();
	
	ctx.beginPath();
	ctx.globalAlpha=0.3;
	ctx.fillStyle="#000000";
	ctx.fillRect(0,ry,width,height-ry);
	ctx.fill();
	ctx.closePath();
	
	ctx.beginPath();
	var lx=-10;
	ctx.fillStyle="white";
	for(var i=1;i<10;i++){
		ctx.fillRect(lx,615,60,13);
		ctx.fillRect(lx,height-10,60,15);
		lx+=80;	
	}
	ctx.fill();
	ctx.closePath();
	
	ctx.restore();
}

/**
* 绘制一片绿地
*/
function drawLand(){
    ctx.save();
    
    ctx.beginPath();
    ctx.moveTo(0, 500);
    ctx.bezierCurveTo(540, 300, 660, 600, 1200, 500);
    ctx.lineTo(1200, 600);
    ctx.lineTo(0, 600);
    var LandStyle =  ctx.createLinearGradient(0, 800, 0, 0);
    LandStyle.addColorStop(0.0, "#030");
    LandStyle.addColorStop(1.0, "#580");
    ctx.fillStyle = LandStyle;
    ctx.closePath();
    ctx.fill();
    
    ctx.restore();
}

/*
 * 天外飞船
 * */
function ufo(){
	ctx.save();
	
    ctx.shadowBlur=40;
	ctx.shadowColor="white";
    ctx.strokeStyle="#FFFFFF";
    ctx.fillStyle="black";
    ctx.beginPath();
    ctx.moveTo(70,100);
	ctx.bezierCurveTo(20,110,20,130,70,140);
	ctx.bezierCurveTo(90,155,160,155,170,140);
	ctx.bezierCurveTo(220,130,220,110,170,100);
	ctx.bezierCurveTo(135,50,90,70,70,100);
    ctx.stroke();
    ctx.fill();
    
    ctx.beginPath();
    ctx.fillStyle="#FFFFFF";
    ctx.lineWidth=2;
    ctx.moveTo(120,105);
	ctx.bezierCurveTo(0,105,0,145,120,150);
	ctx.bezierCurveTo(240,145,240,105,120,105);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.lineWidth=2;
    ctx.moveTo(120,130);
	ctx.bezierCurveTo(55,132,55,150,120,150);
	ctx.bezierCurveTo(185,150,185,132,120,130);
    ctx.stroke();
    ctx.fill();     
    ctx.globalCompositeOperation = 'source-over';
    
    ctx.closePath();
	ctx.restore();
}



sky();
mom();
star();
drawLand();
tree();
road();
ufo();

/*
 * 飞船的射线
 * */
document.onclick = function(){
	function ray(){
	x=event.clientX;
    y=event.clientY;  
	
	ctx.save();
    ctx.shadowBlur=40;
	ctx.shadowColor="white";
    ctx.strokeStyle="#FFFFFF";
    ctx.fillStyle="#FFFFFF";
    ctx.beginPath();
    ctx.lineWidth=2;
    ctx.globalAlpha=0.8;
	ctx.moveTo(x,y);
	ctx.lineTo(110,150);
	ctx.lineTo(130,150);
	ctx.lineTo(x+70,y);
	ctx.bezierCurveTo(x+65,y-20,x+5,y-20,x-1,y);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();   
    
    ctx.beginPath();
    ctx.moveTo(x+70,y);
	ctx.bezierCurveTo(x+65,y-20,x+5,y-20,x-1,y);
	ctx.bezierCurveTo(x+5,y+20,x+65,y+20,x+71,y);
	ctx.fill();
	ctx.stroke();
	ctx.closePath();
	
	
    ctx.globalCompositeOperation = 'source-over';
	ctx.restore();
	console.log(x,y);
	}
	ray();
}



