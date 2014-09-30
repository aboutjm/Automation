var casper = require('casper').create();

// IIFE to hide casper2done variable
(function(casper){
    var casper2done = false;
    casper.newTab = function(url, then, timeout){
        if (typeof url !== "string" || typeof then !== "function") {
            throw "URL or then callback are missing";
        }
        this.then(function(){
            var casper2 = require('casper').create();
            casper2.start(url).then(then).run(function(){
                casper2done = true;
            });
        }).waitFor(function check(){
            return casper2done;
        }, null, null, timeout).then(function(){
            casper2done = false;
        });
        return this;
    };
})(casper);

casper.start("http://test.themes.c-launcher.com/").newTab("http://www.baidu.com/", function(){
    // this is casper2
    this.echo(this.getCurrentUrl(), this.getTitle());
    this.capture("casper2_1.png");
    this.thenClick("a#nav-askquestion");
    this.then(function(){
        this.echo(this.getCurrentUrl(), this.getTitle());
        this.capture("casper2_2.png");
    });
}, 15000).then(function(){
    // this is casper
    this.echo(casper.getCurrentUrl(), casper.getTitle());
    this.capture("casper1.png");
}).run(function(){
    this.echo("DONE");
    this.exit();
});