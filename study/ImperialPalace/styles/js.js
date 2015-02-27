function calculation(type,month){
	var type=type;
	var month=month;
	var ticket;
	console.log(month);
	if(4<=month&&month<=10){
		ticket=60;
	}else{
		ticket=40;
	}
	if(type===1){
		ticket=0;
	}else if(type===2){
		ticket=20;
	}else if(type===3){
		ticket=0;
	}else if(type===4){
		ticket=ticket/2;
	}
	console.log(ticket);
}