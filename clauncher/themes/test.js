casper.test.begin('Clauncher', 1, function suite(test) {
    casper.start("http://test.themes.c-launcher.com/", function() {
        test.assertTitle("Clauncher -- Wonderful Android Launcher, Themes, Wallpapers, Ringstones and Homescreens", "home is ok");
    });
    casper.then(function() {
        //casper.page.injectJs('jquery.js'); 
        this.clickLabel(' Design Themes ', 'a');
        this.wait(5000);
        this.waitForPopup(/test.designer.c-launcher.com/, function(){
            this.test.pass("popup opened");
        });
    });
    casper.then(function() {
        this.wait(5000);
        this.capture("screen.png"); 
    });
    casper.run(function() {
        test.done();
    });
});