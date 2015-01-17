//生成随机数
function getRan(min,max){
	return Math.round(min+Math.random()*(max-min));
};
var index = 0;
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
	//div.style.z-index = index;
	index++;
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