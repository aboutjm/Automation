//生成随机数
function getRan(min,max){
	return Math.round(min+Math.random()*(max-min));
};
var index = 1000;
//点击确定提交愿望
function wishing(){
	if(desire.value){
		//创建愿望Create desire
		createDesire();
	}else{
		//弹出框提示没有输入内容
		alert(desire.value+"还没有输入愿望！！");
	}
}
function createDesire(){
	//增加html节点
	var top = getRan(0,450);
	var left = getRan(300,1000);
	var one = getRan(0,99);
	var two = getRan(0,99);
	var three = getRan(0,99);
	var date = new Date();
	var div = document.createElement("div");
	div.style.left = left+"px";
	div.style.top = top+"px";
	div.style.background = "#"+one+two+three;
	div.style.color = "#"+three+three+three;
	div.style.zIndex = index+1;
	index++;
	var startX,startrY,oTop,oLeft;
	//增加点击方法
	Event.add(div,"click",upClass);
	function upClass(e){
		var obj = Event.target(e);
		obj.style.zIndex = index+1;
		index++;
	}
	Event.add(div,"mousedown",reference);
	function reference(e){
		var obj = Event.target(e);		
		var mouseX = e.pageX || (e.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft));
		var mouseY = e.pageY || (e.clientY + (document.documentElement.scrollTop || document.body.scrollTop));
		startX = mouseX;
		startrY = mouseY;
		oTop = obj.style.top;
		oLeft = obj.style.left;
		console.log(startX,startrY,oTop,oLeft);
	}
	Event.add(div,"mousemove",move);
	function move(e){
		var obj = Event.target(e);		
		var mouseX = e.pageX || (e.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft));
		var mouseY = e.pageY || (e.clientY + (document.documentElement.scrollTop || document.body.scrollTop));
		obj.style.left = (parseInt(oLeft)+startrY-mouseY)+"px";
		obj.style.top = (parseInt(oTop)+startX-mouseX)+"px";
		console.log(startX,startrY,oTop,oLeft,obj.style.left,obj.style.top);
	}
	Event.add(div,"mouseup",over);
	function over(e){
		var obj = Event.target(e);
		var overLeft=parseInt(oLeft)+startrY-mouseY;
		var overTop=parseInt(oTop)+startX-mouseX;
		if(overTop<0||overTop>450||overLeft<300||overLeft>1000){
			obj.style.left = oLeft;
			obj.style.top = oTop;
		}
	}
	//增加html节点内容
	var Month = date.getMonth()+1;
	div.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;"+desire.value+"&nbsp;&nbsp;-&nbsp;-&nbsp;-&nbsp;&nbsp;"+date.getFullYear()+"年"+Month+"月"+date.getDate()+"日";
	//节点插入到许愿墙
	wall.appendChild(div);
}


//left: 50%;
//top: 20px;
//z-index:-1;


		//var date = new Date();
		//var year = date.getFullYear();//年
		//var month = date.getMonth();//月 从0开始0代表1月
		//var date = date.getDate();//日							
		//var day = date.getDay();//星期 从0开始0代表星期日
		//var hours = date.getHours();
		//var minutes = date.getMinutes();
		//var seconds = date.getSeconds();