casper.start("http://www.1758.com/hlmy/yanse2.htm?from=groupmessage&isappinstalled=0");
casper.then(function(){
    this.mouseEvent('click', 'div button');
    this.capture('1.png');
});
casper.then(function(){
    var box = document.getElementById("box");
    var se = box.getElementsByTagName("span");
    var colers =[];
    for(i=0;i<se.length;i++){
        colers.push(se[i].style.backgroundColor);
    }    
    console.log(colers);
});
casper.run();