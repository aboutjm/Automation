function inUrl(){
	var requestEn = document.getElementById('requestEn');
	var requestIn = document.getElementById('requestIn');
	var requestSh = document.getElementById('requestSh');
	var urlper = pullPar();
	var requestUrl = "http://"+requestEn.value+"api.c-launcher.com"+requestIn.value+urlper;
	requestSh.innerHTML = requestUrl;
	return requestUrl;
}
function inRequest(){
	var requestUrl = inUrl();
	request.ajax({
		url : requestUrl,
		type : 'GET',
		success : function(d){
			console.log(d);
		}
	});
}
function settingOver(){
	setting.style.display = "block";
}
function settingOut(){
	setting.style.display = "none";
}
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
function inSet(){
    var parametersName = document.getElementsByClassName("parametersName");
	for(var i = 0 ;i<parametersName.length;i++){
		if(parametersName[i].getAttribute('value') === "1"){
			var date = parametersName[i].innerHTML;
			addEl(date);
		}
	}
}
function addEl(date){
	var p = document.createElement("p");
	var input = document.createElement("input");
	parameters.appendChild(p);
	parameters.appendChild(input);
	p.innerHTML = date;
}
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