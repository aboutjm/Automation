function check(){
	var rText=reference.innerText;
	var pText=practice.innerText;
	var rTextA,pTextA;
	for(i=0,ih=rText.length;i<ih;i++){
		rTextA[i]=rText.substring(i,i+1);
	}
	for(j=0,jh=pText.length;j<jh;j++){
		pTextA[j]=pText.substring(j,j+1);
	}
	for(x=0,xh=pText.length;x<xh;x++){
		if(rTextA[x]!=pTextA[x]){
			pTextA[x]="<font color='red'>"+pTextA[x]+"</font>";
		}
	}
	var oText;
	for(y=0,yh=pTextA.length;y<yh;y++){
		oText+=pTextA[y];
	}
	practice.innerHTML=oText;
}