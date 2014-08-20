function inUrl(){
	console.log("inUrl");
	var requestEn = document.getElementById('requestEn');
	var requestIn = document.getElementById('requestIn');
	var requestSh = document.getElementById('requestSh');
	var requestUrl = "http://"+requestEn.value+"api.c-launcher.com"+requestIn.value;
	requestSh.innerHTML = requestUrl;
	return requestUrl;
}
function inRequest(){
	console.log("request");
	var requestUrl = inUrl();
	request.ajax({
		url : requestUrl,
		type : 'GET',
		success : function(d){
			console.log(d);
		}
	});
}
