var truncate = require('./truncate.js');

var tests = [
    {
        html: '<p><div>hello world</div></p>',
        maxLength: 5
    },
    {
        html: '<p><div>Do you <b>think</b> it is useful</div></p>',
        maxLength: 10
    }
];
var test, i, len;

for (i = 0, len = tests.length; i < len; i++) {
    test = tests[i];
    console.log(test.html, 'original');
    console.log(truncate(test.html, test.maxLength), 'truncate');
}
