casper.test.begin('Clauncher', 4, function suite(test) {
    casper.start("http://test.themes.c-launcher.com/", function() {
        test.assertTitle("Clauncher -- Wonderful Android Launcher, Themes, Wallpapers, Ringstones and Homescreens", "home is ok");
    });
    casper.then(function(){
    	this.capture('index.png');
    });
    casper.then(function(){
    	this.click('li.cyou-head-float-left a');
    });
    casper.then(function(){
        test.assertTitle("Clauncher -- Wonderful Android Launcher, Themes, Wallpapers, Ringstones and Homescreens", "home is ok");
    });
    casper.then(function(){	
        this.clickLabel(' Themes ','a');
    });
    casper.then(function(){
        test.assertTitle("Download wonderful themes for your android phone -- Clauncher", "themes is ok");
    });
    casper.then(function(){
        this.capture('themes.png');
    });
    casper.back();
    casper.then(function(){ 
        this.clickLabel(' Wallpapers ','a');
    });
    casper.then(function(){
        test.assertTitle("Download free wallpapers for your android phone -- Clauncher", "Wallpapers is ok");
    });
    casper.then(function(){
        this.capture('Wallpapers.png');
    });
    casper.back();
    casper.then(function(){ 
        this.clickLabel(' Design Themes ','a');
    });
    casper.then(function(){
        test.assertTitle("Design android themes -- personalize your phone--Clauncher", "designer is ok");
    });
    casper.then(function(){
        this.capture('designer.png');
    });
    casper.run(function() {
        test.done();
    });
});