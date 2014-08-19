var requestEn = getElementById('requestEn');
var requestIn = getElementById('requestIn');
var requestRe = getElementById('requestRe');
var requestSh = getElementById('requestSh');
var requestUrl = "http://"+requestEn.value+"api.c-launcher.com"+requestIn.value;
requestSh.innerHTML = requestUrl;
function request(){
	request.ajax({
		url : requestUrl,
		type : 'GET',
		success : function(d){
			console.log(d);
		}
	});
}
