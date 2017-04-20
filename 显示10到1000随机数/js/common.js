$(document).ready(function(){
	fun();


});

function fun(){
	for(var i=0;i<10;i++){	
	var x=document.getElementsByTagName("td")[i]
	x.innerHTML=(Math.floor((Math.random()*100)+1))*10;
	}
}


