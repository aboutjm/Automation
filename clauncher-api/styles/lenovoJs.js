//获取接口对应参数的方法	parameters.getParameters("接口名称");
function dates(api){
	var parameters = ["ss","platformCode","goodsCode","nums"];
	var apiinfo = {
		"/api/products/getinstantpersonalization":[0,1,2,3],
	}
//http://www.lenovouat.cn/api/products/getrecommends?ss=484&platformCode=4&goodsCodes=51174&nums=5
//http://www.lenovouat.cn/api/products/getinstantpersonalization?ss=478&platformCode=4&goodsCode=51174&nums=6
//http://www.lenovouat.cn/bbs/1203/top_posts?source=100001
//http://www.lenovouat.cn/api/products/checkStockListNew?ss=427&codeTpid=%7B%2251174%22%3A%227fbaebc0-08d2-46af-aebc-20674024a721%22%7D&platformCode=4&_=1449121739428
//http://www.lenovouat.cn/api/products/getviewrecommends?ss=480&plat=4&goodsCode=51174
//http://www.lenovouat.cn/api/products/checkStockListNew?ss=383&codeTpid=%7B%2251174%22%3A%227fbaebc0-08d2-46af-aebc-20674024a721%22%7D&platformCode=4&_=1449121739384
//http://www.lenovouat.cn/api/products/salesinfo?ss=330&productId=7fbaebc0-08d2-46af-aebc-20674024a721&goodsCode=51174&platformCode=4
//
	var n=api;
	var apiParameters;
	function getParameters(n){
		apiParameters=[];
		var key = apiinfo[n];
		for(var i=0,k=key.length;i<k;i++){
			var x=key[i];
			apiParameters.push(parameters[x]);
		}
		return apiParameters;
	}
	return {
		getParameters : getParameters
	}
}
var pars=dates();
//提供连接中的参数内容的字符串
function pullPar(){
	var p = parameters.getElementsByTagName("p");
	var input = parameters.getElementsByTagName("input");
	var urlPer = "?";
	for(var i=0,k=p.length;i<k;i++){
		urlPer = urlPer+p[i].innerHTML+"="+input[i].value+"&";
	}
	return urlPer;
}
//组合链接方法
function inUrl(){
	var urlper = pullPar();
	var requestUrl = "http://"+requestEn.value+requestIn.value+urlper;
	requestSh.innerHTML = requestUrl;
	return requestUrl;
}
//选择接口循环添加参数dom结构
function apiAdd(e){
	parameters.innerHTML="";
	var rin = requestIn.value;
	var pin = pars.getParameters(rin);
	for (var i=0,k=pin.length; i<k; i++) {
		var ss=pin[i];
		addEl(ss);
	};
}
//添加参数的dom结构
function addEl(date){
	var p = document.createElement("p");
	var input = document.createElement("input");
	var img = document.createElement("img");
	img.src ="delete.png";
	parameters.appendChild(p);
	parameters.appendChild(input);
	parameters.appendChild(img);
	p.innerHTML = date;
	Event.add(img,"click",imDelete);
	function imDelete(e){
		var obj = Event.target(e);
		var parentNode = obj.parentNode;
		parentNode.removeChild(p);
		parentNode.removeChild(input);
		parentNode.removeChild(img);
	}
}
//localVersions={“packageName”:versionCode,...}
/*
展示部分逻辑
*/
//展示出可选择展示的选项sKey
function sKey(){
	request.ajax({
		url : inUrl(),
		type : 'GET',
		success : function(d){
			showDate.getDate(d);
		}
	});
}
function showGetDate(){
	var lDate,keys3;
	//获取数据查分数据
	function getDate(n){
		var date =  JSON.parse(n);
		var uDate = date["data"];
		var keys1 =[];
		for(var key in uDate){
			keys1.push(key);
		}
		var s;
		if(keys1[0] !== "rc"){
			s=keys1[0];
		}else{
			s=keys1[1];
		}
		lDate = uDate[s];
		var keys2 =[];
		keys3 =[];
		function key2Fu(){
			if(typeof lDate[0] ==="object"){
				for(var key in lDate[0]){
					keys2.push(key);
				}
			}else{
				keys2=s;
			}
		}
		if(uDate["rc"]===0){
			show.innerHTML = "";
			key2Fu();
			if(keys2!==s){
				showKey();
			}else{
				showFuString();
			}
		}else{
			show.innerHTML = "rc"+uDate["rc"]+"备注：1=失败。";
		}	
		function showFuString(){
			var div =document.createElement("div");
			show.appendChild(div);
			div.innerHTML = keys2;
			for(var x=0,len=lDate.length;x<len;x++){
				var ul =document.createElement("ul");
				show.appendChild(ul);
				var li =document.createElement("li");
				ul.appendChild(li);
				var u=lDate[x];
				li.innerHTML = u;
			}
		}
		function showKey(){
			showKeyD.innerHTML="";
			for(var i=0,leng=keys2.length;i<leng;i++){
				showKeyDomAdd(i);
			}
			function showKeyDomAdd(n){
				var div =document.createElement("div");
				showKeyD.appendChild(div);
				var input =document.createElement("input");
				showKeyD.appendChild(input);
				var ssk = keys2[n];
				div.innerHTML = ssk;
				input.type = "checkbox";
				Event.add(input,"click",sKeys3);
				function sKeys3(){
					var aass = 100;
					for (var i=0,h=keys3.length; i<h; i++) {
						if(keys3[i]===ssk){
							aass=i;
						}
					};
					if(aass === 100){
						keys3.push(ssk);
					}else{
						keys3.splice(aass,1);
					} 
				}
			}
		}
	}
	//展示要展示数据
	function inRequest(){
		//创建样式
		function showFu(){
			show.innerHTML ="";
			//表头
			for(var i=0,len=keys3.length;i<len;i++){
				var div =document.createElement("div");
				show.appendChild(div);
				div.innerHTML = keys3[i];
			}
			//内容
			for(var x=0,len=lDate.length;x<len;x++){
				var ul =document.createElement("ul");
				show.appendChild(ul);
				for(var y=0,leng=keys3.length;y<leng;y++){
					var li =document.createElement("li");
					ul.appendChild(li);
					var t=keys3[y];
					var u=lDate[x];
					li.innerHTML = u[t];
				}
			}
		}
		showFu();
	}
	return {
		getDate : getDate,
		inRequest : inRequest
	}
}
var showDate=showGetDate();