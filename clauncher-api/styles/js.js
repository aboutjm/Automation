function inUrl(){
	var requestEn = document.getElementById('requestEn');
	var requestIn = document.getElementById('requestIn');
	var requestSh = document.getElementById('requestSh');
	var requestUrl = "http://"+requestEn.value+"api.c-launcher.com"+requestIn.value;
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
function parametersSetting(){
	parametersSetting.style="display: block;";
}
