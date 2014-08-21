var test1 = require('./test.js');
casper.test.begin('Clauncher', 1, function suite(test) {
    casper.start("http://test.themes.c-launcher.com/", function() {
        test.assertTitle("Clauncher -- Wonderful Android Launcher, Themes, Wallpapers, Ringstones and Homescreens", "Clauncher is ok");
    });
    casper.then(function(){
    	this.capture('index.png');
    });
    casper.then(function(){
    	this.click('li.cyou-head-float-left a');
    });
    casper.then(function(){
    	console.log('click ok,new location is' + this.getCurrentUrl());
    });
    casper.then(function(){
    	this.clickLabel(' Themes ','a');
    });
    casper.then(function(){
    	console.log('click ok,new location is' + this.getCurrentUrl());
        
    });
    casper.back();
    casper.then(function(){
    	console.log('click ok,new location is' + this.getCurrentUrl());
    });
    casper.run(function() {
        test.done();
    });
});