function test1(){
	console.log('testsgsdfgsdfgsdfgsdfgsdfg')
}
//module.exports = test1;
exports.a = test1;
exports.b = test2;




var test1 = require('./test.js');




    casper.log('this is a debug message', 'debug');
    casper.log('and an informative one', 'info');
    casper.log('and a warning', 'warning');
    casper.log('and an error', 'error');