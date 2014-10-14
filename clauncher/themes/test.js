casper.start('http://test.themes.c-launcher.com/').then(function() {
    this.echo(this.getTitle());
});
var selector = ' Design Themes ';
casper.evaluate(function (selector) {
    var element = window.__utils__.findOne(selector);
    if (element instanceof HTMLAnchorElement) {
        element.removeAttribute('target');
    }
}, selector);
casper.then(function() {
    this.clickLabel(selector, 'a');
});
casper.then(function() {
    this.echo(this.getTitle(), 'ERROR');
});
casper.run();
/*尝试的第四个*//*
casper.test.begin('Clauncher', 2, function suite(test) {
    casper.start("http://test.themes.c-launcher.com/", function() {
        test.assertTitle("Clauncher -- Wonderful Android Launcher, Themes, Wallpapers, Ringstones and Homescreens", "home is ok");
    });
    casper.then(function(){
        this.clickLabel(' Design Themes ', 'a');
        this.echo(this.getTitle());
    });
    casper.waitForPopup(/test.designer.c-launcher.com/, capture);
    function capture(){
        this.echo(this.getTitle());
        this.test.assertEquals(this.popups.length, 1);
        this.capture("screen4.png"); 
    };
    casper.run(function() {
        test.done();
    });
});*/
/*尝试的第三个*//*
casper.test.begin('Clauncher', 2, function suite(test) {
    casper.start("http://test.themes.c-launcher.com/", function() {
        test.assertTitle("Clauncher -- Wonderful Android Launcher, Themes, Wallpapers, Ringstones and Homescreens", "home is ok");
    });
    casper.then(function(){
        this.clickLabel(' Design Themes ', 'a');
    });
    casper.waitForPopup(/test.designer.c-launcher.com/, function() {
        this.test.assertEquals(this.popups.length, 1);
    });
    casper.then(function(){
        this.capture("screen3.png"); 
    });
    casper.run(function() {
        test.done();
    });
});*/
/*尝试的第二个*//*
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
            this.capture("screen2.png"); 
        });
    });
    casper.run(function() {
        test.done();
    });
});*/
/*尝试的第一个*//*
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
        this.capture("screen1.png"); 
    });
    casper.run(function() {
        test.done();
    });
});*/