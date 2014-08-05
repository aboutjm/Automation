casper.start('http://test.themes.c-launcher.com/');
casper.thenEvaluate(function(term){
	document.querySelector('input[name="keyword"]').setAttribute('value', term);
},'1');
casper.then(function(){
	this.clickLabel('',' button');
});
casper.then(function(){
    this.capture('1.png');
});
casper.then(function() {
    console.log('clicked ok, new location is ' + this.getCurrentUrl());
});
casper.run();



