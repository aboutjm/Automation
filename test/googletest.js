casper.test.begin('Clauncher', 1, function suite(test) {
    casper.start("http://www.c-launcher.com/", function() {
        test.assertTitle("Clauncher -- Wonderful Android Launcher, Themes, Wallpapers, Ringstones and Homescreens", "Clauncher is ok");
    });
    casper.run(function() {
        test.done();
    });
});