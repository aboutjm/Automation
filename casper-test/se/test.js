function clicks(){
	var box = document.getElementById("box");
	var se = box.getElementsByTagName("span");
	var colers =[];
	for(var i=0;i<se.length;i++){
		colers.push(se[i].style.backgroundColor);
	}
	console.log(colers);
	var coo;
	var too=0;
	var tong=colers[0];
	for(var i=1;i<se.length;i++){
		if(colers[i]===tong){
		}else{
			too++;
			coo=i;
		}
	}
	if (too===1) {
		coo
	} else{
		0
	};
}
for(var t=0;t <100; t++){
	clicks();
}