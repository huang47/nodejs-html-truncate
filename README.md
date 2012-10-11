# motivation
To create a library ease to truncate HTML text and keep tag safe

## example
`var string = '<p><div>hello world</div></p>';`

`truncate(string, 5) =======> '<p><div>hello...</div></p>'`

output HTML <p><div>hello...</div></p>

`string = '<p><div>Do you <b>think</b> it is useful</div></p>';`

`truncate(string, 10) =======> '<p><div>Do you <b>thi...</b></div></p>'`

output HTML <p><div>Do you <b>thi...</b></div></p>

## options
### keepImageTag (default: false)
`var string = '<p><img src="http://l.yimg.com/a/i/ww/met/yahoo_logo_us_061509.png" alt="yahoo logo"><div>hello world</div></p>';`

`truncate(string, 5, { keepImageTag: true }) =======> '<p><img src="http://l.yimg.com/a/i/ww/met/yahoo_logo_us_061509.png" alt="yahoo logo"><div>hello...</div></p>'`

### ellipsis (default: '...')
`var string = '<p><div>hello world</div></p>';`

`truncate(string, 5) =======> '<p><div>hello...</div></p>'`

`truncate(string, 5, { ellipsis: '+++' }) =======> '<p><div>hello+++</div></p>'`

`truncate(string, 5, { ellipsis: false }) =======> '<p><div>hello</div></p>'`

### truncateLastWord (default: true)
`var string = 'hello world this is a test string';`

`truncate(string, 15) =======> 'hello world thi...'`
`truncate(string, 15, { truncateLastWord: true }) =======> 'hello world thi...'`
`truncate(string, 15, { truncateLastWord: false }) =======> 'hello world...'`

## demo
./demo

## documentation (powered by yuidoc)
npm i yuidocjs -g
yuidoc --server .
open http://localhost:3000

## npm package
npm install [html-truncate][1]

[1]: http://search.npmjs.org/#/html-truncate

## LICENSE
Copyrights for code authored by Yahoo! Inc. is licensed under the following terms:
MIT License
Copyright (c) 2012 Yahoo! Inc. All Rights Reserved.
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
