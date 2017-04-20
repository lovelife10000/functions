	var LoadImage= function(obj){
		this.newimages = [];
	    this.count = 0;
	    this.arr = (typeof obj.imgs!="object")? [obj.imgs] : obj.imgs;
	    this.len =this.arr.length;
	    this.per=(1/this.len);
	    this.loading = obj.loading;
	    this.done = obj.done;   
	    this.Run();
	};

	LoadImage.prototype.imageloadpost = function() {
		var self = this,num=null;
	    self.count++;       
	    num = self.count*self.per;
	    num = parseInt(num*100);
	    self.loading(num);
	    if (self.count==self.len){
	        self.loading(100);
	        setTimeout(function(){self.done()},500);
	    }
	};
	LoadImage.prototype.Run = function() {
		var self = this;
	    for (var i=0; i<self.arr.length; i++){
	        self.newimages[i]=new Image();
	        self.newimages[i].src=self.arr[i];
	        self.newimages[i].onload=function(){
	            self.imageloadpost();
	        }
	        self.newimages[i].onerror=function(){
	            self.imageloadpost();
	        }
	    }
	};
	var LoadingSwit = function(num){
		document.getElementById("loading-num").innerHTML=num+"%";
	},
	initPage = function(){
		setTimeout(function(){		
			$("#loading").hide();//loading动画停止
			$(".page-wrap").show();		
		},1500);
	}
	$(".page-wrap").hide();
	var MyLoadImage = new LoadImage({
		imgs: ['./images/body.jpg'
				,'./images/music.png'
				,'./images/loading.png'
				,'./images/dot3.png'
				,'./images/zhong1.png'
				,'./images/zhen.png'
				,'./images/zhong2.png'
			],
		loading: LoadingSwit,
		done: initPage
	});