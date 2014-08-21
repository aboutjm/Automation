casper.test.begin('Clauncher', 1, function suite(test) {
    casper.start("http://test.themes.c-launcher.com/", function() {
        test.assertTitle("Clauncher -- Wonderful Android Launcher, Themes, Wallpapers, Ringstones and Homescreens", "home is ok");
    });
    casper.then(function(){
    	this.capture('index.png');
    	this.click('li.cyou-head-float-left a');
        test.assertTitle("Clauncher -- Wonderful Android Launcher, Themes, Wallpapers, Ringstones and Homescreens", "home is ok");
    	this.clickLabel(' Themes ','a');
        test.assertTitle("Download wonderful themes for your android phone -- Clauncher", "themes is ok");
        this.capture('themes.png');
    });
    casper.back();
    casper.run(function() {
        test.done();
    });
});