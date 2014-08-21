casper.start("http://test.themes.c-launcher.com/");
casper.test.begin('Clauncher', 1, function suite(test) {
    test.assertTitle("Clauncher -- Wonderful Android Launcher, Themes, Wallpapers, Ringstones and Homescreens", "Clauncher is ok");
    test.done();
});
casper.run();