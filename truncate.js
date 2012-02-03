var stack = require('./stack.js');


module.exports = function (string, maxLength) {
    var content = '',       // traced text
        total = 0,          // record how many characters we traced so far
        matches = true,
        result, index, tag, tail;

    while(matches) {
        matches = /<\/?[^>]*>/g.exec(string);
        if ( ! matches) { break; }
        result = matches[0];
        index = matches.index;

        // overceed, dump everything to clear stack
        if (total + index > maxLength) {
            content += string.substring(0, maxLength - total);
            content += stack.dumpCloseTag();
            
            break;
        } else {
            total += index;
            content += string.substring(0, index);
        }

        if (-1 === result.indexOf('</')) {
            tail = result.indexOf(' ');
            tail = (-1 === tail) ? result.indexOf('>') : tail;
            stack.push({
                tag: result.substring(1, tail),
                html: result
            });
        } else {
            stack.pop();
        }

        content += result;

        string = string.substring(index + result.length);
    }

    return content;
}
