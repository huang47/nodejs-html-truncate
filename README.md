# Motivation
Truncate HTML text and also keep tag safe.

## NOTICE
Given string is expected to be well-formatted HTML.

## CHANGELOG

| Version | Logs |
|:--|:--|
| 1.0.3 | support browser |
| 1.0.0 | deprecated: truncateLastWord. Also, exports function directly |
| 0.3.1 | features done |

## API
```
/**
 * @static
 * @method truncate
 * @param {String} string string needs to be truncated
 * @param {Number} maxLength length of truncated string
 * @param {Object} options (optional)
 * @param {Boolean} [options.keepImageTag] flag to specify if keep image tag, false by default
 * @param {Boolean|String} [options.ellipsis] omission symbol for truncated string, '...' by default
 * @return {String} truncated string
 */
truncate(string, length, options);
```

## usage
```
var truncate = require('html-truncate');
```

### truncate text
```
truncate('hello world', 4)

// hell...
```

```
truncate('hello world', 6)

// hello ...
```

### keep tag safe
```
truncate('<p><div>hello world</div></p>', 4)

// <p><div>hell...</div></p> 
```

### keep image tag (if any)
#### non-closed
```
truncate('<p><div><img class="yahoo" src="#" alt="yahoo logo">Do you <b>think</b> it is useful</div></p>', 3, { keepImageTag: true })

// <p><div><img class="yahoo" src="#" alt="yahoo logo">Do ...</div></p>
```

```
truncate('<p><div><img class="yahoo" src="#" alt="yahoo logo">Do you <b>think</b> it is useful</div></p>', 10, { keepImageTag: true })

// <p><div><img class="yahoo" src="#" alt="yahoo logo">Do you <b>thi...</b></div></p>
```


#### self-closed
```
truncate('<p><div><img class="yahoo" src="#" alt="yahoo logo" />Do you <b>think</b> it is useful</div></p>', 3, { keepImageTag: true })
// <p><div>Do ...</div></p>
```

```
truncate('<p><div><img class="yahoo" src="#" alt="yahoo logo" />Do you <b>think</b> it is useful</div></p>', 10, { keepImageTag: true })
// <p><div><img class="yahoo" src="#" alt="yahoo logo" />Do you <b>thi...</b></div></p>
```

### customize suffix
```
truncate('<p><div>hello world</div></p>', 4, { ellipsis: '###' })

// <p><div>hell###</div></p> 
```

```
truncate('<p><div>hello world</div></p>', 4, { ellipsis: '' })

// <p><div>hell</div></p> 
```

## NOTICE


## Appendix
[npm: html-truncate](http://search.npmjs.org/#/html-truncate)

## dependencies

### unit test
[npm: mocha](https://npmjs.org/package/mocha)

### documentation
[npm: yuidocjs](https://npmjs.org/package/yuidocjs)

## LICENSE
Copyrights for code authored by Yahoo! Inc. is licensed under the following terms:
MIT License
Copyright (c) 2012 Yahoo! Inc. All Rights Reserved.
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
