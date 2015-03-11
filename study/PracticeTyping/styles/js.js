function check(){
	console.log(practice);
	var rText=reference.innerText;
	var pText=practice.innerText;
	console.log(practice);
	var rTextA=[];
	var pTextA=[];
	console.log(pText,pTextA,practice);
	for(i=0,ih=rText.length;i<ih;i++){
		rTextA[i]=rText.substring(i,i+1);
	}
	for(j=0,jh=pText.length;j<jh;j++){
		pTextA[j]=pText.substring(j,j+1);
		//console.log(pText[j]);
	}
	console.log(pText,pTextA,practice);
	//if(rTextA.length>1){
		//start();
	//}
	//function start(){
		for(x=0,xh=pTextA.length;x<xh;x++){
			if(rTextA[x]!=pTextA[x]){
				pTextA[x]="<font color='red'>"+pTextA[x]+"</font>";
			}
		}
		console.log(pText,pTextA,practice);
		var oText="";
		for(y=0,yh=pTextA.length;y<yh;y++){
			oText+=pTextA[y];
		}
		console.log(oText,practice);
		practice.innerHTML=oText;
	//}
}