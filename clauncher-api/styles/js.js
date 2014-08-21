function inUrl(){
	var requestEn = document.getElementById('requestEn');
	var requestIn = document.getElementById('requestIn');
	var requestSh = document.getElementById('requestSh');
	pullPar();
	var requestUrl = "http://"+requestEn.value+"api.c-launcher.com"+requestIn.value+urlPer;
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
    var parametersName = document.getElementsByClassName("parametersName");
    var checkBox = document.getElementsByClassName("checkBox");
    for(var i = 0 ;i<checkBox.length;i++){
    	var checkBoxInput = checkBox[i].getElementsByTagName("input");
    	console.log(checkBoxInput);
		Event.add(checkBoxInput[0],"click",checkBoxInputClick);
		function checkBoxInputClick(){
			if(parametersName[i].value===0){
				parametersName[i].value=1;
			}else{
				parametersName[i].value=0;
			}
		}
    }
	
}
function inSet(){
    var parametersName = document.getElementsByClassName("parametersName");
	for(var i = 0 ;i<parametersName.length;i++){
		if(parametersName[i].value){
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
		urlper = urlPer+p[i].innerHTML+"="+input[i].value+"&";
	}
}




//localVersions={“packageName”:versionCode,...}