/*
 * 走路
 * */
function walk(){	
	var ol=70,ox=47,k=0;
	var walk=document.getElementById("walk");
/*	var walkleft="10px" ;*/
    var walkx = "-27px"; 
	var timer=null;
	clearInterval(timer);	
	timer = setInterval(function (){ 
		if(k<6){
			
    	   /* walkleft=walk.style.left=parseInt(walkleft)+ ol +"px"; */
			walkx = walk.style.backgroundPositionX = parseInt(walkx) - ox + "px"; 
		  k++;
		}else{
/*          walkleft="-80px"; */
			walkx="20px"; 
			k=0; 
		}
	},50);	
		
} 
walk();

/*
 * 跑步
 * */
function run(){
	
	var ol=20,ox=37.7,k=0;
	var run=document.getElementById("run");
/*	var runleft="10px" ;*/
	var runx = "-21px";
	var timer=null;
	clearInterval(timer);	
	timer = setInterval(function (){ 
		if(k<8){
/*			runleft=run.style.left=parseInt(runleft)+ ol +"px";*/
			runx = run.style.backgroundPositionX = parseInt(runx) - ox + "px"; 
		  k++;
		}else{
/*			runleft="-80px";*/
			runx="16px"; 
			k=0; 
		}
	},50);	
		
} 
run();