//获取接口对应参数的方法	parameters.getParameters("接口名称");
function dates(api){
	var parameters = ["country","channelId","auditTime","density","downloads","iconName","id","local",
	"language","weight","version","type","themeId","themeAreaId","sdkVersion","recommendTime","paperId",
	"pageSize","packageName","orderNum","localVersions","recommendSize","page","k"];
	var apiinfo = {
		"/client/home/get.do":[8,0,1,3,7],
		"/client/theme/newest/typelist.do":[8,0,1,5,7],
		"/client/themearea/list.do":[8,0,1,13,9,17,7],
		"/client/themearea/detail.do":[8,0,6],
		"/client/themearea/themes.do":[8,0,1,13,17,19,3,7],
		"/client/theme/new/relatedThemes.do":[8,0,1,17,3,6,7],
		"/client/theme/newest/lastest.do":[8,0,1,17,3,19,7],
		"/client/theme/newest/hottest.do":[8,0,1,17,3,19,7],
		"/client/theme/newest/lastestByType.do":[8,0,1,17,3,19,11,7],
		"/client/theme/newest/hottestByType.do":[8,0,1,17,3,19,11,7],
		"/client/targetcountry/list.do":[8,0],
		"/client/themesearch/search.do":[3,7,0,1,22,17,21,23]
	}
	var n=api;
	var apiParameters=[];
	function getParameters(n){
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
	var requestUrl = "http://"+requestEn.value+"api.c-launcher.com"+requestIn.value+urlper;
	requestSh.innerHTML = requestUrl;
	return requestUrl;
}
//发送get请求
function inRequest(){
	var requestUrl=requestSh.innerHTML;
	request.ajax({
		url : requestUrl,
		type : 'GET',
		success : function(d){
			getDate(d);
		}
	});
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
//获取数据查分数据
function getDate(n){
	show.innerHTML ="";
	var date =  JSON.parse(n);
	var uDate = date["data"];
	var keys1 =[];
	for(var key in uDate){
		keys1.push(key);
	}
	var s;
	if(keys1[0] !== "code"){
		s=keys1[0];
	}else{
		s=keys1[1];
	}
	var lDate = uDate[s];
	var keys2 =[];
	function key2Fu(){
		if(typeof lDate[0] ==="object"){
			for(var key in lDate[0]){
				keys2.push(key);
			}
		}else{
			keys2=s;
		}
	}
	//创建样式
	function showFu(){
		//表头
		for(var i=0,len=keys2.length;i<len;i++){
			var div =document.createElement("div");
			show.appendChild(div);
			div.innerHTML = keys2[i];
		}
		//内容
		for(var x=0,len=lDate.length;x<len;x++){
			var ul =document.createElement("ul");
			show.appendChild(ul);
			for(var y=0,leng=keys2.length;y<leng;y++){
				var li =document.createElement("li");
				ul.appendChild(li);
				var t=keys2[y];
				var u=lDate[x];
				li.innerHTML = u[t];
			}
		}
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
	if(uDate["code"]===100){
		show.innerHTML = "<p>展示</p>";
		key2Fu();
		if(keys2!==s){
			showFu();
		}else{
			showFuString();
		}
	}else{
		show.innerHTML = "code"+uDate["code"]+"备注：101=无结果；102=参数错误；103=程序异常。";
	}
}