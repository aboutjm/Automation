//assertTitle() 检查title实例
casper.test.begin('Clauncher', 1, function suite(test) {
    casper.start("http://www.c-launcher.com/", function() {
        test.assertTitle("Clauncher -- Wonderful Android Launcher, Themes, Wallpapers, Ringstones and Homescreens", "Clauncher is ok");
    });
    casper.run(function() {
        test.done();
    });
});
//——自动退出=没有防止测试者退出所有的测试，当被执行；这通常允许执行的附加操作，虽然意味着退出卡斯帕手动听退出测试事件：
casper.test.on("exit", function() {
  someTediousAsyncProcess(function() {
    casper.exit();
  });
});

////The Tester prototype
//assert()
Signature: assert(Boolean condition[, String message])//签名：断言（布尔条件[，字符串消息]）
Asserts that the provided condition strictly resolves to a boolean true://断言所提供的条件严格解析到一个布尔值true：
casper.test.assert(true, "true's true");//casper试验.断言（真的，“真正的”）；
casper.test.assert(!false, "truth is out");//casper测试.断言（！假，“真理”）；
See also//参见
assertNot()
//assertDoesntExist()
Signature: assertDoesntExist(String selector[, String message])//签名：断言doesnt存在（字符串 选择器[，字符串 消息]）
Asserts that an element matching the provided selector expression doesn’t exists within the remote DOM environment://asserts匹配选择器的元素是提供给表达不存在DOM在远程环境。
casper.test.begin('assertDoesntExist() tests', 1, function(test) {
    casper.start().then(function() {
        this.setContent('<div class="heaven"></div>');
        test.assertDoesntExist('.taxes');
    }).run(function() {
        test.done();
    });
});
See also//参见
assertExists()
//assertEquals()
Signature: assertEquals(mixed testValue, mixed expected[, String message])//签名：断言等于（混合testvalue，混合期望[，字符串消息]）
Asserts that two values are strictly equivalent://断言两个值是完全等价的：
casper.test.begin('assertEquals() tests', 3, function(test) {
    test.assertEquals(1 + 1, 2);
    test.assertEquals([1, 2, 3], [1, 2, 3]);
    test.assertEquals({a: 1, b: 2}, {a: 1, b: 2};
    test.done();
});
See also//参见
assertNotEquals()
//assertEval()
Signature: assertEval(Function fn[, String message, Mixed arguments])//签名：断言eval（函数fn [，字符串消息，混合参数】）
Asserts that a code evaluation in remote DOM strictly resolves to a boolean true://断言，在偏远的DOM代码评估严格解析到一个布尔值true：
casper.test.begin('assertEval() tests', 1, function(test) {
    casper.start().then(function() {
        this.setContent('<div class="heaven">beer</div>');
        test.assertEval(function() {
            return __utils__.findOne('.heaven').textContent === 'beer';
        });
    }).run(function() {
        test.done();
    });
});
//assertEvalEquals()
Signature: assertEvalEquals(Function fn, mixed expected[, String message, Mixed arguments])//签名：断言eval等于（函数fn，混合期望[，字符串消息，混合参数】）
Asserts that the result of a code evaluation in remote DOM strictly equals to the expected value://认为，在偏远的DOM代码评判结果严格等于预期值：
casper.test.begin('assertEvalEquals() tests', 1, function(test) {
    casper.start().then(function() {
        this.setContent('<div class="heaven">beer</div>');
        test.assertEvalEquals(function() {
            return __utils__.findOne('.heaven').textContent;
        }, 'beer');
    }).run(function() {
        test.done();
    });
});
//assertElementCount()
Signature: assertElementCount(String selector, Number count[, String message])//签名：assertelementcount（字符串 选择器，计数[，字符串 消息]）
Asserts that a selector expression matches a given number of elements://断言一个选择器表达式匹配一个给定的元素的数目：
casper.test.begin('assertElementCount() tests', 3, function(test) {
    casper.start().then(function() {
        this.page.content = '<ul><li>1</li><li>2</li><li>3</li></ul>';
        test.assertElementCount('ul', 1);
        test.assertElementCount('li', 3);
        test.assertElementCount('address', 0);
    }).run(function() {
        test.done();
    });
});
//assertExists()
Signature: assertExists(String selector[, String message])//签名：断言存在（字符串 选择器[，字符串 消息]）
Asserts that an element matching the provided selector expression exists in remote DOM environment://断言元素匹配提供的选择器的表达存在于远程DOM环境：
casper.test.begin('assertExists() tests', 1, function(test) {
    casper.start().then(function() {
        this.setContent('<div class="heaven">beer</div>');
        test.assertExists('.heaven');
    }).run(function() {
        test.done();
    });
});
See also//参见
assertDoesntExist()
//assertFalsy()
Signature: assertFalsy(Mixed subject[, String message])//签名：断言falsy（混合主体[，字符串消息]）
New in version 1.0.
Asserts that a given subject is falsy.//断言某个特定的主题是falsy。
See also//参见
assertTruthy()
//assertField()
Signature: assertField(String|Object input, String expected[, String message, Object options])//签名：断言场（字符串|输入字符串对象，期望[，字符串消息，对象选项]）
Asserts that a given form field has the provided value with input name or selector expression://声称，给定的窗体域具有提供的值与输入名称或选择表达：
casper.test.begin('assertField() tests', 1, function(test) {
    casper.start('http://www.google.fr/', function() {
        this.fill('form[name="gs"]', { q: 'plop' }, false);
        test.assertField('q', 'plop');
    }).run(function() {
        test.done();
    });
});
// Path usage with type 'css'
casper.test.begin('assertField() tests', 1, function(test) {
    casper.start('http://www.google.fr/', function() {
        this.fill('form[name="gs"]', { q: 'plop' }, false);
        test.assertField({type: 'css', path: '.q.foo'}, 'plop');
    }).run(function() {
        test.done();
    });
});
New in version 1.0.
This also works with any input type: select, textarea, etc.//这与任何输入类型也可以：选择，文本，等等。
New in version 1.1.
The options parameter allows to set the options to use with ClientUtils#getFieldValue().//options参数可以设置选项以使用clientutils # getfieldvalue()。
input parameter introspects whether or not a type key is passed in with xpath or css and a property path specified along with it.
//输入参数的反思是否或不是一个类型的关键是通过XPath或CSS和属性指定的路径与它一起。
//assertFieldName()
Signature: assertFieldName(String inputName, String expected[, String message, Object options])//签名：assertfieldname（字符串inputname，期待字符串字符串消息，对象的选择[，]）
New in version 1.1-beta3.
Asserts that a given form field has the provided value:
casper.test.begin('assertField() tests', 1, function(test) {
    casper.start('http://www.google.fr/', function() {
        this.fill('form[name="gs"]', { q: 'plop' }, false);
        test.assertField('q', 'plop', 'did not plop', {formSelector: 'plopper'});
    }).run(function() {
        test.done();
    });
});
assertFieldCSS()
Signature: assertFieldCSS(String cssSelector, String expected, String message)

New in version 1.1.
Asserts that a given form field has the provided value given a CSS selector:

casper.test.begin('assertField() tests', 1, function(test) {
    casper.start('http://www.google.fr/', function() {
        this.fill('form[name="gs"]', { q: 'plop' }, false);
        test.assertField('q', 'plop', 'did not plop', 'input.plop');
    }).run(function() {
        test.done();
    });
});
assertFieldXPath()
Signature: assertFieldXPath(String xpathSelector, String expected, String message)

New in version 1.1.
Asserts that a given form field has the provided value given a XPath selector:

casper.test.begin('assertField() tests', 1, function(test) {
    casper.start('http://www.google.fr/', function() {
        this.fill('form[name="gs"]', { q: 'plop' }, false);
        test.assertField('q', 'plop', 'did not plop', '/html/body/form[0]/input[1]');
    }).run(function() {
        test.done();
    });
});
assertHttpStatus()
Signature: assertHttpStatus(Number status[, String message])

Asserts that current HTTP status code is the same as the one passed as argument:

casper.test.begin('casperjs.org is up and running', 1, function(test) {
    casper.start('http://casperjs.org/', function() {
        test.assertHttpStatus(200);
    }).run(function() {
        test.done();
    });
});
assertMatch()
Signature: assertMatch(mixed subject, RegExp pattern[, String message])

Asserts that a provided string matches a provided javascript RegExp pattern:

casper.test.assertMatch('Chuck Norris', /^chuck/i, 'Chuck Norris\' first name is Chuck');
See also
assertUrlMatch()
assertTitleMatch()
assertNot()
Signature: assertNot(mixed subject[, String message])

Asserts that the passed subject resolves to some falsy value:

casper.test.assertNot(false, "Universe is still operational");
See also
assert()

assertNotEquals()
Signature: assertNotEquals(mixed testValue, mixed expected[, String message])

New in version 0.6.7.
Asserts that two values are not strictly equals:

casper.test.assertNotEquals(true, "true");
See also
assertEquals()

assertNotVisible()
Signature: assertNotVisible(String selector[, String message])

Asserts that the element matching the provided selector expression is not visible:

casper.test.begin('assertNotVisible() tests', 1, function(test) {
    casper.start().then(function() {
        this.setContent('<div class="foo" style="display:none>boo</div>');
        test.assertNotVisible('.foo');
    }).run(function() {
        test.done();
    });
});
See also
assertVisible()

assertRaises()
Signature: assertRaises(Function fn, Array args[, String message])

Asserts that the provided function called with the given parameters raises a javascript Error:

casper.test.assertRaises(function(throwIt) {
    if (throwIt) {
        throw new Error('thrown');
    }
}, [true], 'Error has been raised.');

casper.test.assertRaises(function(throwIt) {
    if (throwIt) {
        throw new Error('thrown');
    }
}, [false], 'Error has been raised.'); // fails
assertSelectorDoesntHaveText()
Signature: assertSelectorDoesntHaveText(String selector, String text[, String message])

Asserts that given text does not exist in all the elements matching the provided selector expression:

casper.test.begin('assertSelectorDoesntHaveText() tests', 1, function(test) {
    casper.start('http://google.com/', function() {
        test.assertSelectorDoesntHaveText('title', 'Yahoo!');
    }).run(function() {
        test.done();
    });
});
See also
assertSelectorHasText()

assertSelectorHasText()
Signature: assertSelectorHasText(String selector, String text[, String message])

Asserts that given text exists in elements matching the provided selector expression:

casper.test.begin('assertSelectorHasText() tests', 1, function(test) {
    casper.start('http://google.com/', function() {
        test.assertSelectorHasText('title', 'Google');
    }).run(function() {
        test.done();
    });
});
See also
assertSelectorDoesntHaveText()

assertResourceExists()
Signature: assertResourceExists(Function testFx[, String message])

The testFx function is executed against all loaded assets and the test passes when at least one resource matches:

casper.test.begin('assertResourceExists() tests', 1, function(test) {
    casper.start('http://www.google.fr/', function() {
        test.assertResourceExists(function(resource) {
            return resource.url.match('logo3w.png');
        });
    }).run(function() {
        test.done();
    });
});
Shorter:

casper.test.begin('assertResourceExists() tests', 1, function(test) {
    casper.start('http://www.google.fr/', function() {
        test.assertResourceExists('logo3w.png');
    }).run(function() {
        test.done();
    });
});
Hint
Check the documentation for Casper.resourceExists().

assertTextExists()
Signature: assertTextExists(String expected[, String message])

Asserts that body plain text content contains the given string:

casper.test.begin('assertTextExists() tests', 1, function(test) {
    casper.start('http://www.google.fr/', function() {
        test.assertTextExists('google', 'page body contains "google"');
    }).run(function() {
        test.done();
    });
});
See also
assertTextDoesntExist()

assertTextDoesntExist()
Signature: assertTextDoesntExist(String unexpected[, String message])

New in version 1.0.
Asserts that body plain text content doesn’t contain the given string:

casper.test.begin('assertTextDoesntExist() tests', 1, function(test) {
    casper.start('http://www.google.fr/', function() {
        test.assertTextDoesntExist('bing', 'page body does not contain "bing"');
    }).run(function() {
        test.done();
    });
});
See also
assertTextExists()

assertTitle()
Signature: assertTitle(String expected[, String message])

Asserts that title of the remote page equals to the expected one:

casper.test.begin('assertTitle() tests', 1, function(test) {
    casper.start('http://www.google.fr/', function() {
        test.assertTitle('Google', 'google.fr has the correct title');
    }).run(function() {
        test.done();
    });
});
See also
assertTitleMatch()

assertTitleMatch()
Signature: assertTitleMatch(RegExp pattern[, String message])

Asserts that title of the remote page matches the provided RegExp pattern:

casper.test.begin('assertTitleMatch() tests', 1, function(test) {
    casper.start('http://www.google.fr/', function() {
        test.assertTitleMatch(/Google/, 'google.fr has a quite predictable title');
    }).run(function() {
        test.done();
    });
});
See also
assertTitle()

assertTruthy()
Signature: assertTruthy(Mixed subject[, String message])

New in version 1.0.
Asserts that a given subject is truthy.

See also
assertFalsy()

assertType()
Signature: assertType(mixed input, String type[, String message])

Asserts that the provided input is of the given type:

casper.test.begin('assertType() tests', 1, function suite(test) {
    test.assertType(42, "number", "Okay, 42 is a number");
    test.assertType([1, 2, 3], "array", "We can test for arrays too!");
    test.done();
});
Note
Type names are always expressed in lower case.

assertInstanceOf()
Signature: assertInstanceOf(mixed input, Function constructor[, String message])

New in version 1.1.
Asserts that the provided input is of the given constructor:

function Cow() {
    this.moo = function moo() {
        return 'moo!';
    };
}
casper.test.begin('assertInstanceOf() tests', 2, function suite(test) {
    var daisy = new Cow();
    test.assertInstanceOf(daisy, Cow, "Ok, daisy is a cow.");
    test.assertInstanceOf(["moo", "boo"], Array, "We can test for arrays too!");
    test.done();
});
assertUrlMatch()
Signature: assertUrlMatch(Regexp pattern[, String message])

Asserts that the current page url matches the provided RegExp pattern:

casper.test.begin('assertUrlMatch() tests', 1, function(test) {
    casper.start('http://www.google.fr/', function() {
        test.assertUrlMatch(/^http:\/\//, 'google.fr is served in http://');
    }).run(function() {
        test.done();
    });
});
assertVisible()
Signature: assertVisible(String selector[, String message])

Asserts that the element matching the provided selector expression is visible:

casper.test.begin('assertVisible() tests', 1, function(test) {
    casper.start('http://www.google.fr/', function() {
        test.assertVisible('h1');
    }).run(function() {
        test.done();
    });
});
See also
assertNotVisible()

begin()
Signatures:

begin(String description, Number planned, Function suite)
begin(String description, Function suite)
begin(String description, Number planned, Object config)
begin(String description, Object config)
New in version 1.1.
Starts a suite of <planned> tests (if defined). The suite callback will get the current Tester instance as its first argument:

function Cow() {
    this.mowed = false;
    this.moo = function moo() {
        this.mowed = true; // mootable state: don't do that
        return 'moo!';
    };
}

// unit style synchronous test case
casper.test.begin('Cow can moo', 2, function suite(test) {
    var cow = new Cow();
    test.assertEquals(cow.moo(), 'moo!');
    test.assert(cow.mowed);
    test.done();
});
Note
The planned argument is especially useful in case a given test script is abruptly interrupted leaving you with no obvious way to know it and an erroneously successful status.

A more asynchronous example:

casper.test.begin('Casperjs.org is navigable', 2, function suite(test) {
    casper.start('http://casperjs.org/', function() {
        test.assertTitleMatches(/casperjs/i);
        this.clickLabel('Testing');
    });

    casper.then(function() {
        test.assertUrlMatches(/testing\.html$/);
    });

    casper.run(function() {
        test.done();
    });
});
Important
done() must be called in order to terminate the suite. This is specially important when doing asynchronous tests so ensure it’s called when everything has actually been performed.

See also
done()

Tester#begin() also accepts a test configuration object, so you can add setUp() and tearDown() methods:

// cow-test.js
casper.test.begin('Cow can moo', 2, {
    setUp: function(test) {
        this.cow = new Cow();
    },

    tearDown: function(test) {
        this.cow.destroy();
    },

    test: function(test) {
        test.assertEquals(this.cow.moo(), 'moo!');
        test.assert(this.cow.mowed);
        test.done();
    }
});
colorize()
Signature: colorize(String message, String style)

Render a colorized output. Basically a proxy method for Casper.Colorizer#colorize().

comment()
Signature: comment(String message)

Writes a comment-style formatted message to stdout:

casper.test.comment("Hi, I'm a comment");
done()
Signature: done()

Changed in version 1.1: planned parameter is deprecated
Flag a test suite started with begin() as processed:

casper.test.begin('my test suite', 2, function(test) {
    test.assert(true);
    test.assertNot(false);
    test.done();
});
More asynchronously:

casper.test.begin('Casperjs.org is navigable', 2, function suite(test) {
    casper.start('http://casperjs.org/', function() {
        test.assertTitleMatches(/casperjs/i);
        this.clickLabel('Testing');
    });

    casper.then(function() {
        test.assertUrlMatches(/testing\.html$/);
    });

    casper.run(function() {
        test.done();
    });
});
See also
begin()

error()
Signature: error(String message)

Writes an error-style formatted message to stdout:

casper.test.error("Hi, I'm an error");
fail()
Signature: fail(String message)

Adds a failed test entry to the stack:

casper.test.fail("Georges W. Bush");
See also
pass()

formatMessage()
Signature: formatMessage(String message, String style)

Formats a message to highlight some parts of it. Only used internally by the tester.

getFailures()
Signature: getFailures()

New in version 1.0.
Deprecated since version 1.1.

Retrieves failures for current test suite:

casper.test.assertEquals(true, false);
require('utils').dump(casper.test.getFailures());
casper.test.done();
That will give something like this:

$ casperjs test test-getFailures.js
Test file: test-getFailures.js
FAIL Subject equals the expected value
#    type: assertEquals
#    subject: true
#    expected: false
{
    "length": 1,
    "cases": [
        {
            "success": false,
            "type": "assertEquals",
            "standard": "Subject equals the expected value",
            "file": "test-getFailures.js",
            "values": {
                "subject": true,
                "expected": false
            }
        }
    ]
}
FAIL 1 tests executed, 0 passed, 1 failed.

Details for the 1 failed test:

In c.js:0
   assertEquals: Subject equals the expected value
Note
In CasperJS 1.1, you can recorded test failures by listening to the tester fail event:

var failures = [];

casper.test.on("fail", function(failure) {
  failures.push(failure);
});
getPasses()
Signature: getPasses()

New in version 1.0.
Deprecated since version 1.1.

Retrieves a report for successful test cases in the current test suite:

casper.test.assertEquals(true, true);
require('utils').dump(casper.test.getPasses());
casper.test.done();
That will give something like this:

$ casperjs test test-getPasses.js
Test file: test-getPasses.js
PASS Subject equals the expected value
{
    "length": 1,
    "cases": [
        {
            "success": true,
            "type": "assertEquals",
            "standard": "Subject equals the expected value",
            "file": "test-getPasses.js",
            "values": {
                "subject": true,
                "expected": true
            }
        }
    ]
}
PASS 1 tests executed, 1 passed, 0 failed.
Note
In CasperJS 1.1, you can recorded test successes by listening to the tester success event:

var successes = [];

casper.test.on("success", function(success) {
  successes.push(success);
});
info()
Signature: info(String message)

Writes an info-style formatted message to stdout:

casper.test.info("Hi, I'm an informative message.");
pass()
Signature: pass(String message)

Adds a successful test entry to the stack:

casper.test.pass("Barrack Obama");
See also
fail()

renderResults()
Signature: renderResults(Boolean exit, Number status, String save)

Render test results, save results in an XUnit formatted file, and optionally exits phantomjs:

casper.test.renderResults(true, 0, 'test-results.xml');
Note
This method is not to be called when using the casperjs test command (see documentation for testing), where it’s done automatically for you.

setUp()
Signature: setUp([Function fn])

Defines a function which will be executed before every test defined using begin():

casper.test.setUp(function() {
    casper.start().userAgent('Mosaic 0.1');
});
To perform asynchronous operations, use the done argument:

casper.test.setUp(function(done) {
    casper.start('http://foo').then(function() {
        // ...
    }).run(done);
});
Warning
Don’t specify the done argument if you don’t intend to use the method asynchronously.

See also
tearDown()

skip()
Signature: skip(Number nb, String message)

Skips a given number of planned tests:

casper.test.begin('Skip tests', 4, function(test) {
    test.assert(true, 'First test executed');
    test.assert(true, 'Second test executed');
    test.skip(2, 'Two tests skipped');
    test.done();
});
tearDown()
Signature: tearDown([Function fn])

Defines a function which will be executed before after every test defined using begin():

casper.test.tearDown(function() {
    casper.echo('See ya');
});
To perform asynchronous operations, use the done argument:

casper.test.tearDown(function(done) {
    casper.start('http://foo/goodbye').then(function() {
        // ...
    }).run(done);
});
Warning
Don’t specify the done argument if you don’t intend to use the method asynchronously.

See also
setUp()