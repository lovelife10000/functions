function allPrpos(obj){
	var props="";
	for(var i in obj){
		if(typeof(obj[i])=="function"){
			obj[i]();
		}else{
			props+=i+"="+obj[i];
		}
	}
	alert(props);
}
var obj={name:"li",age:21,getAge:function(){alert(1);}}
allPrpos(obj);