var assert = require('assert');
var truncate = require('./truncate.js');

describe('truncate', function() {
  it('should truncate text with given length', function() {
    var input, expect, actual;

    input = 'hello';
    actual = truncate(input, 3);
    expect = 'hel...';
    assert.strictEqual(expect, actual);

    input = 'I am not sure what I am talking about';
    actual = truncate(input, 10);
    expect = 'I am not s...';
    assert.strictEqual(expect, actual);
  });

  it('should keep tag safe', function() {
    var input, expect, actual;

    input = '<p><div>hello</p></div>';
    actual = truncate(input, 3);
    expect = '<p><div>hel...</div></p>';
    assert.strictEqual(expect, actual);

    input = '<p><div>hello world</p></div>';
    actual = truncate(input, 5);
    expect = '<p><div>hello...</div></p>';
    assert.strictEqual(expect, actual);

    // complex example
    input = '<b class="yui3-highlight">Zooey</b> Deschanel embodies quirky cute and she is quickly becoming America\'s sweetheart. <b class="yui3-highlight">Here</b> are some of the "New Girl" star\'s best looks and information on w<b class="yui3-highlight">here</b> you can buy them';
    actual = truncate(input, 100);
    expect = '<b class="yui3-highlight">Zooey</b> Deschanel embodies quirky cute and she is quickly becoming America\'s sweetheart. <b class="yui3-highlight">Here</b> are some...';
    assert.strictEqual(expect, actual);

    // crazy example
    input = '<div class="res sc" id="news_cluster"><div class="news_mix"><div class="news_text"><a href="http://rds.yahoo.com/_ylt=A2KJjam6KixPXHwAdDTQtDMD;_ylu=X3oDMTEzb3FxaW0zBHBvcwMyBHNlYwNzcgRjb2xvA3NwMgR2dGlkA1VTTklDN18y/SIG=12s06lheg/EXP=1328323386/**http%3a//news.yahoo.com/obama-pushes-veterans-jobs-programs-165818778.html" class="yschttl spt" dirtyhref="http://rds.yahoo.com/_ylt=A2KJjam6KixPXHwAdDTQtDMD;_ylu=X3oDMTEzb3FxaW0zBHBvcwMyBHNlYwNzcgRjb2xvA3NwMgR2dGlkA1VTTklDN18y/SIG=12s06lheg/EXP=1328323386/**http%3a//news.yahoo.com/obama-pushes-veterans-jobs-programs-165818778.html"><b>Obama</b> pushes for veterans jobs programs</a><div class="snip"><span>In an effort to cut the unemployment rate among veterans, President Barack <b>Obama</b> is calling for a new conservation program that would put veterans to work rebuilding trails, roads and levees on public lands.</span></div><div class="source"><span><b>Associated Press via Yahoo! News - 54 minutes ago</b></span></div><ul class="stories"><li><a href="http://news.yahoo.com/obama-congress-dont-muck-recovery-175036839.html" class="news_heading" dirtyhref="http://rds.yahoo.com/_ylt=A2KJjam6KixPXHwAdTTQtDMD;_ylu=X3oDMTE1aGJsOG9pBHBvcwMyLjEEc2VjA3NyBGNvbG8Dc3AyBHZ0aWQDVVNOSUM3XzI-/SIG=12q0b2d6u/EXP=1328323386/**http%3a//news.yahoo.com/obama-congress-dont-muck-recovery-175036839.html"> <b>Obama</b> to Congress : don\'t \'muck up\' recovery</a><span class="sim_source"> - AFP via Yahoo! News</span></li><li><a href="http://news.yahoo.com/obama-says-policies-extension-faith-202259370.html" class="news_heading" dirtyhref="http://rds.yahoo.com/_ylt=A2KJjam6KixPXHwAdjTQtDMD;_ylu=X3oDMTE1Y25tNnZ2BHBvcwMyLjIEc2VjA3NyBGNvbG8Dc3AyBHZ0aWQDVVNOSUM3XzI-/SIG=12sd0ur8u/EXP=1328323386/**http%3a//news.yahoo.com/obama-says-policies-extension-faith-202259370.html"> <b>Obama</b> says his policies are extension of h...</a><span class="sim_source"> - Associated Press via Yahoo! News</span></li><li><a href="http://news.yahoo.com/obama-economic-recovery-speeding-164051167.html" class="news_heading" dirtyhref="http://rds.yahoo.com/_ylt=A2KJjam6KixPXHwAdzTQtDMD;_ylu=X3oDMTE1cWx1dGloBHBvcwMyLjMEc2VjA3NyBGNvbG8Dc3AyBHZ0aWQDVVNOSUM3XzI-/SIG=12pmq6h9t/EXP=1328323386/**http%3a//news.yahoo.com/obama-economic-recovery-speeding-164051167.html"> <b>Obama</b>: Economic recovery speeding up</a><span class="sim_source"> - Associated Press via Yahoo! News</span></li><li class="more_stories"><a href="http://news.search.yahoo.com/search;_ylt=A2KJjam6KixPXHwAeDTQtDMD?p=obama&amp;fr=sfp&amp;tmpl=USNIC7&amp;clid=UqJpXLdI4hEinwkE2loGUpbI">all 94 news articlesâ¦</a></li></ul></div></div></div>';
    actual = truncate(input, 200);
    expect = '<div class="res sc" id="news_cluster"><div class="news_mix"><div class="news_text"><a href="http://rds.yahoo.com/_ylt=A2KJjam6KixPXHwAdDTQtDMD;_ylu=X3oDMTEzb3FxaW0zBHBvcwMyBHNlYwNzcgRjb2xvA3NwMgR2dGlkA1VTTklDN18y/SIG=12s06lheg/EXP=1328323386/**http%3a//news.yahoo.com/obama-pushes-veterans-jobs-programs-165818778.html" class="yschttl spt" dirtyhref="http://rds.yahoo.com/_ylt=A2KJjam6KixPXHwAdDTQtDMD;_ylu=X3oDMTEzb3FxaW0zBHBvcwMyBHNlYwNzcgRjb2xvA3NwMgR2dGlkA1VTTklDN18y/SIG=12s06lheg/EXP=1328323386/**http%3a//news.yahoo.com/obama-pushes-veterans-jobs-programs-165818778.html"><b>Obama</b> pushes for veterans jobs programs</a><div class="snip"><span>In an effort to cut the unemployment rate among veterans, President Barack <b>Obama</b> is calling for a new conservation program that would put veterans to work rebuil...</span></div></div></div></div>';
    assert.strictEqual(expect, actual);
  });

  it('should handle non-closed tag such as <img> well', function() {
    var input, expect, actual;

    input = '<p><div><img class="yahoo" src="http://l.yimg.com/a/i/ww/met/yahoo_logo_us_061509.png" alt="yahoo logo">Do you <b>think</b> it is useful</div></p>';
    actual = truncate(input, 3);
    expect = '<p><div>Do ...</div></p>';
    assert.strictEqual(expect, actual);

    actual = truncate(input, 10);
    expect = '<p><div>Do you <b>thi...</b></div></p>';
    assert.strictEqual(expect, actual);

    input = '<p><div><img class="yahoo" src="http://l.yimg.com/a/i/ww/met/yahoo_logo_us_061509.png" alt="yahoo logo">Do you <b>think</b> it is useful</div></p>';
    actual = truncate(input, 3, { keepImageTag: true });
    expect = '<p><div><img class="yahoo" src="http://l.yimg.com/a/i/ww/met/yahoo_logo_us_061509.png" alt="yahoo logo">Do ...</div></p>';
    assert.strictEqual(expect, actual);
  });

  it('should handle self-closed tag such as <img/> well', function() {
    var input, expect, actual;

    input = '<p><div><img class="yahoo" src="http://l.yimg.com/a/i/ww/met/yahoo_logo_us_061509.png" alt="yahoo logo" />Do you <b>think</b> it is useful</div></p>';
    actual = truncate(input, 3);
    expect = '<p><div>Do ...</div></p>';
    assert.strictEqual(expect, actual);

    input = '<p><div><img class="yahoo" src="http://l.yimg.com/a/i/ww/met/yahoo_logo_us_061509.png" alt="yahoo logo" />Do you <b>think</b> it is useful</div></p>';
    actual = truncate(input, 3, { keepImageTag: true });
    expect = '<p><div><img class="yahoo" src="http://l.yimg.com/a/i/ww/met/yahoo_logo_us_061509.png" alt="yahoo logo" />Do ...</div></p>';
    assert.strictEqual(expect, actual);

    actual = truncate(input, 10, { keepImageTag: true });
    expect = '<p><div><img class="yahoo" src="http://l.yimg.com/a/i/ww/met/yahoo_logo_us_061509.png" alt="yahoo logo" />Do you <b>thi...</b></div></p>';
    assert.strictEqual(expect, actual);
  });

  it('should append ellipsis by default', function() {
    var input, expect, actual;

    input = '<p><div>hello</p></div>';
    actual = truncate(input, 3);
    expect = '<p><div>hel...</div></p>';
    assert.strictEqual(expect, actual);

    actual = truncate(input, 3, { ellipsis: '' });
    expect = '<p><div>hel</div></p>';
    assert.strictEqual(expect, actual);

    actual = truncate(input, 3, { ellipsis: '---' });
    expect = '<p><div>hel---</div></p>';
    assert.strictEqual(expect, actual);

    actual = truncate(input, 3, { ellipsis: '---WHATEVER-I-WANT' });
    expect = '<p><div>hel---WHATEVER-I-WANT</div></p>';
    assert.strictEqual(expect, actual);
  });
});
