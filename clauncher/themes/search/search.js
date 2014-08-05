var txt = require('./themes.js');
var theme = txt.a;
var Length = theme.length;
casper.test.begin('Clauncher', Length, function suite(test) {
    casper.start();
    for(var i=0;i<Length;i++){
       doit(i);
    };
    function doit(n){
        var id = theme[n].themeId;
        var url = 'http://test.themes.c-launcher.com/theme/detail.do?themeId='+id;
        casper.thenOpen(url,afterOpen);
        function afterOpen() {
                test.assertDoesntExist('.download btn-download',id);
        }
    }
    casper.run(function() {
        test.done();
    });
});