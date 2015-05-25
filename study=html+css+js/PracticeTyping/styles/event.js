//事件
var Event ={
	add : function(obj,type,fn){
		if(obj.attacheEvent){
			return obj.attachEvent("on"+type,fn);
		}else{
			return obj.addEventListener(type,fn,false);
		}
	},
	remove : function(obj,type,fn){
		if(obj.detacheEvent){
			return obj.detachEvent("on"+type,fn);
		}else{
			return obj.removeEventListener(type,fn,false);
		}
	},
	stop : function(evt){
		var e = window.event || evt;
		if(window.event){
			e.cancelBubble = true;
			e.returnValue = false;
		}else{
			e.stopPropagation();
			e.preventDefault();
		}
	},
	target : function(evt){
		var e = window.event || evt;
		var tar = e.target || e.srcElement;
		return tar;
	}
}
//生成随机数
function getRan(min,max){
	return Math.round(min+Math.random()*(max-min));
};
//var date = new Date();
//var year = date.getFullYear();//年
//var month = date.getMonth();//月 从0开始0代表1月
//var date = date.getDate();//日							
//var day = date.getDay();//星期 从0开始0代表星期日
//var hours = date.getHours();
//var minutes = date.getMinutes();
//var seconds = date.getSeconds();

//随机字符串
function getString(len,radix) {
    radix = radix ? 10 : 36;
    var rdmString = "";
    for (; rdmString.length < len; rdmString += Math.random().toString(radix).substr(2));
    return rdmString.substr(0, len);
}