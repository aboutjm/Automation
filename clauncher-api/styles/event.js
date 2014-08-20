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