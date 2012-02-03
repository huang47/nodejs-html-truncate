# motivation
To create a library ease to truncate HTML text and keep tag safe

## example
`var string = '<p><div>hello world</div></p>';`

`truncate(string, 5) =======> '<p><div>hello</div></p>'`

output HTML <p><div>hello</div></p>

`string = '<p><div>Do you <b>think</b> it is useful</div></p>';`

`truncate(string, 10) =======> '<p><div>Do you <b>thi</b></div></p>'`

output HTML <p><div>Do you <b>thi</b></div></p>
