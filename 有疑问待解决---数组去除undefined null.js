function del(arr){
	for(var i=0;len=arr.length,i<len;i++){
		if(arr[i]=="" || arr[i]===undefined){
		arr.splice(i,1);
		len--;
		i--;
	}
	}
	
	return arr;
}
console.log(del([undefined,1,2,undefined,3,"",4]));