var request=function(){
	function getARandom(){return Math.ceil(1+Math.random()*1e3)*Math.ceil(1+Math.random()*1e3)*Math.ceil(1+Math.random()*1e3)}
	function jsonp(e){
		if(!e){
			console.error("please fill in any parameters first!");return
		}
		if(!e.url){
			console.error("url is required parameters, please check your parameters!");return
		}
		options.setVal(e);
		_callbackfn= options.jsonpName || "jsonpCallbackFunctionNo"+(new Date).getTime()+"_"+getARandom();
		window[_callbackfn] = options.success;
		create();
	}
	function create(){var e=document.createElement("script"),t=/[\?]/g.test(options.url)?"&":"?",n=head?head:head=document.getElementsByTagName("head")[0];for(var r in options.data)t+=r+"="+options.data[r]+"&";t=t+"callback="+_callbackfn,e.async=!0,e.src=options.url+(t=="?"?"":t),n.appendChild(e)}
	function ajax(e){if(!e){console.error("please fill in any parameters first!");return}if(!e.url){console.error("url is required parameters, please check your parameters!");return}if(!e.success||typeof e.success!="function"){console.error("the callback function is lost!");return}options.setVal(e),send()}
	function XMLHTTP(){var e;try{e=new XMLHttpRequest}catch(t){try{e=new ActiveXObject("Msxml2.XMLHTTP")}catch(t){e=new ActiveXObject("Microsoft.XMLHTTP")}}return e?e:!1}
	function send(){var xmlHttp=XMLHTTP(),argStr=/[\?]/g.test(options.url)?"&":"?",_this=this,length=options.data?options.data.length:0;for(var key in options.data)argStr+=key+"="+options.data[key]+"&";argStr=argStr.replace(/\&$/g,""),options.type.toUpperCase()=="GET"?xmlHttp.open(options.type,options.url+(argStr==""?"":argStr),options.async):xmlHttp.open(options.type,options.url,options.async),xmlHttp.setRequestHeader("Content-Type",options.contentType),xmlHttp.onreadystatechange=function(){if(xmlHttp.readyState==4)if(xmlHttp.status==200||xmlHttp.status==0){if(typeof options.success=="function"){var responseData=xmlHttp.responseText;options.dataType.toLowerCase()=="json"?responseData=eval("("+responseData+")"):options.dataType.toLowerCase()!="text"&&(responseData=xmlHttp.responseXML),options.avatar?options.success.call(options.avatar,responseData):options.success(responseData)}xmlHttp=null}else typeof options.error=="function"&&options.error("Server Status: "+xmlHttp.status)},xmlHttp.send(options.type.toUpperCase()=="POST"?argStr.replace('?',''):null)}
	var options={
			type:"GET",
			dataType:"text",
			async:!0,
			avatar:null,
			contentType:"application/x-www-form-urlencoded",
			url:"about:blank",
			data:{},
			jsonpName:null,
			success:null,
			error:null,
			setVal:function(e){for(var t in e)this[t]=e[t]}
		},
		_callbackfn,head;
	return{jsonp:jsonp,ajax:ajax}
}();