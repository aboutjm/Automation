var casper = require('casper').create({
// ...
casper.run(function() {
    require('utils').dump(this.logs);
    this.exit();
});