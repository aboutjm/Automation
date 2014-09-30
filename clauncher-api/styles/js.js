document.domain = "c-launcher.com";
//组合好请求的链接
function inUrl(){
	var requestEn = document.getElementById('requestEn');
	var requestIn = document.getElementById('requestIn');
	var requestSh = document.getElementById('requestSh');
	var urlper = pullPar();
	var requestUrl = "http://"+requestEn.value+"api.c-launcher.com"+requestIn.value+urlper;
	requestSh.innerHTML = requestUrl;
	return requestUrl;
}
//发送get请求
function inRequest(){
	var requestUrl = inUrl();
	request.ajax({
		url : requestUrl,
		type : 'GET',
		success : function(d){
			getDate(d);
		}
	});
}
//鼠标停放显示参数选项
function settingOver(){
	setting.style.display = "block";
}
//鼠标离开隐藏参数选项
function settingOut(){
	setting.style.display = "none";
}
//点击选中参数并标记
function checkBoxClick(){
    var parametersName = setting.getElementsByTagName("div");
    var checkBox = [];
    var tmp = [];
    for(var i = 0,len = parametersName.length;i < len;i++){
    	if(parametersName[i].className === 'parametersName'){
    		tmp.push(parametersName[i]);
    	}
    	if(parametersName[i].className === 'checkBox'){
    		checkBox.push(parametersName[i]);
    	}
    }
    parametersName = tmp;
    for(var i = 0 ;i<checkBox.length;i++){
    	doing(i)
    }
    function doing(n){    	
    	var checkBoxInput = checkBox[n].getElementsByTagName("input");
		Event.add(checkBoxInput[0],"click",function(){
			checkBoxInputClick(n);
		});
    }
	function checkBoxInputClick(i){
		if(parametersName[i].getAttribute('value')==0){
			parametersName[i].setAttribute('value',1);
		}else{
			parametersName[i].setAttribute('value',0);
		}
	}
	
}
//设置参数
function inSet(){
	parameters.innerHTML = "";
    var parametersName = document.getElementsByClassName("parametersName");
	for(var i = 0 , leng = parametersName.length;i<leng;i++){
		if(parametersName[i].getAttribute('value') === "1"){
			var date = parametersName[i].innerHTML;
			addEl(date);
		}
	}
}
//添加参数的dom结构
function addEl(date){
	var p = document.createElement("p");
	var input = document.createElement("input");
	parameters.appendChild(p);
	parameters.appendChild(input);
	p.innerHTML = date;
}
//提供连接中的参数内容的字符串
function pullPar(){
	var p = parameters.getElementsByTagName("p");
	var input = parameters.getElementsByTagName("input");
	var urlPer = "?";
	for(var i=0;i<p.length;i++){
		urlPer = urlPer+p[i].innerHTML+"="+input[i].value+"&";
	}
	return urlPer;
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


/*	原来写的页面操作的逻辑可能可以用到
	var body = document.getElementsByTagName("body");
	var date = JSON.parse(body[0].innerHTML);
	var da = date["data"];
	var d = da["paperList"];
	body[0].innerHTML="";
	function add(){
		var div = document.createElement("div");
		var p = document.createElement("p");
		body[0].appendChild(div);
		div.appendChild(p);
		div.style.overflow = "hidden";
		p.innerHTML =d[a].wallpaperId+"----"+d[a].name+"----"+d[a].downloads;
		p.style.float = "left";
	};
	for(var a=0;a<d.length;a++){
		add();
	};
	数据结构typeof
	var json ={"data":{"typeList":[{"name":"Animalstest","description":"It is much more common to pull TTL inputs up3","type":87,"typeIcon":"http://test.designer.c-launcher.com/resources/categoryicon/0/586/53bfa8c80cf2d9a1c7dc8da2/default_1407757587592.png"},{"name":"Animalstest","description":"Introduction to TTL series IC and basic electronic devices","type":23,"typeIcon":"http://test.designer.c-launcher.com/resources/categoryicon/0/283/530edb290cf23d54d0c6acdb/default_1404894441351.png"},{"name":"hi.hello Android","description":"The control simulation console converted 27V electrical signal into TTL electrical signal","type":22,"typeIcon":"http://test.designer.c-launcher.com/resources/categoryicon/0/354/530edb210cf23d54d0c6acda/icon_1397417597697.jpg"},{"name":"Cars","description":"","type":24,"typeIcon":"http://test.designer.c-launcher.com/resources/categoryicon/0/828/530edb320cf23d54d0c6acdc/default_1407378992027.jpg"},{"name":"Food&Drink","description":"","type":25,"typeIcon":"http://test.designer.c-launcher.com/resources/categoryicon/0/445/530edb330cf23d54d0c6acdd/icon_1402975438488.png"},{"name":"Cartoon & Anime","description":"cute","type":26,"typeIcon":"http://test.designer.c-launcher.com/resources/categoryicon/0/990/530edb3c0cf23d54d0c6acde/default_1407439711610.jpeg"},{"name":"Celebrity","description":"","type":27,"typeIcon":""},{"name":"Festive","description":"","type":28,"typeIcon":""},{"name":"Games","description":"","type":29,"typeIcon":""},{"name":"Lifestyle & Arts","description":"","type":30,"typeIcon":"http://test.designer.c-launcher.com/resources/categoryicon/0/554/530edb5f0cf23d54d0c6ace2/icon_1397448694461.jpg"},{"name":"Love & Romance","description":"","type":31,"typeIcon":""},{"name":"Movies & TV","description":"","type":32,"typeIcon":""},{"name":"Music","description":"","type":33,"typeIcon":"http://test.designer.c-launcher.com/resources/categoryicon/0/805/530edb7b0cf23d54d0c6ace5/icon_1397505061324.jpg"},{"name":"Nature","description":"","type":34,"typeIcon":"http://test.designer.c-launcher.com/resources/categoryicon/0/582/530edb860cf23d54d0c6ace6/icon_1397448708945.jpg"},{"name":"People","description":"","type":35,"typeIcon":""},{"name":"Religion & Myth","description":"","type":36,"typeIcon":""},{"name":"Science & Technology","description":"","type":37,"typeIcon":""},{"name":"Sexy","description":"","type":38,"typeIcon":"http://test.designer.c-launcher.com/resources/categoryicon/0/378/530edbab0cf23d54d0c6acea/icon_1397505098781.jpg"},{"name":"Sports","description":"","type":39,"typeIcon":"http://test.designer.c-launcher.com/resources/categoryicon/0/691/530edbb20cf23d54d0c6aceb/icon_1397449375965.jpg"},{"name":"Life","description":"Life Show ~","type":78,"typeIcon":""},{"name":"World Cup","description":"We will ~ We Will ~ rock uWe will ~ We Will ~ rock uWe will ~ We Will ~ rock uWe will ~ We Will ~ rock uWe will ~ We Will ~ rock uWe will ~ We Will ~ rock uWe will ~ We Will ~ rock uWe will ~ We Will ~ rock uWe will ~ We Will ~ rock u","type":79,"typeIcon":"http://test.designer.c-launcher.com/resources/categoryicon/0/576/539a6af90cf2d42ed16ce0b0/default_1404713168221.jpg"},{"name":"Test","description":"test","type":86,"typeIcon":"http://test.designer.c-launcher.com/resources/categoryicon/0/73/53bcfd050cf2ba0f75a0b911/default_1404894475821.jpg"}],"code":100}} 
*/