/*jslint nomen:true*/
'use strict';

/**
 * HTML-Truncate Utility
 * This utility truncates html text and keep tag safe(close properly)
 *
 * @module Utility
 * @class Utility
 */
function Utility() {}

/**
 * @static
 * @method truncate
 * @param {String} string string needs to be truncated
 * @param {Number} maxLength length of truncated string
 * @param {Object} options (optional)
 * @param {Boolean} [options.keepImageTag] flag to specify if keep image tag, false by default
 * @param {Boolean|String} [options.ellipsis] omission symbol for truncated string, '...' by default
 * @param {Boolean} [options.truncateLastWord] truncates last word, true by default
 * @return {String} truncated string
 */
Utility.truncate = function (string, maxLength, options) {
    var EMPTY_OBJECT = {},
        EMPTY_STRING = '',
        DEFAULT_TRUNCATE_SYMBOL = '...',
        EXCLUDE_TAGS = ['img'],         // non-closed tags
        items = [],                     // stack for saving tags
        total = 0,                      // record how many characters we traced so far
        content = EMPTY_STRING,         // truncated text storage
        KEY_VALUE_REGEX = '(\\w+\\s*=\\s*"[^"]*"\\s*)*',
        IS_CLOSE_REGEX = '\\s*\\/?\\s*',
        CLOSE_REGEX = '\\s*\\/\\s*',
        SELF_CLOSE_REGEX = new RegExp('<\\/?\\w+\\s*' + KEY_VALUE_REGEX + CLOSE_REGEX + '>'),
        HTML_TAG_REGEX = new RegExp('<\\/?\\w+\\s*' + KEY_VALUE_REGEX + IS_CLOSE_REGEX + '>'),
        IMAGE_TAG_REGEX = new RegExp('<img\\s*' + KEY_VALUE_REGEX + IS_CLOSE_REGEX + '>'),
        matches = true,
        result,
        index,
        tail,
        tag,
        selfClose;

    /**
     * @private
     * @method _removeImageTag
     * @param {String} string not-yet-processed string
     * @description helper to dump all close tags and append to truncated content while reaching upperbound
     * @return {String} string without image tags
     */
    function _removeImageTag(string) {
        var match = IMAGE_TAG_REGEX.exec(string),
            index,
            len;

        if (!match) {
            return string;
        }

        index = match.index;
        len = match[0].length;

        return string.substring(0, index) + string.substring(index + len);
    }

    /**
     * @private
     * @method _dumpCloseTag
     * @param {String[]} tags a list of tags which should be closed
     * @description helper to dump all close tags and append to truncated content while reaching upperbound
     * @return {String} well-formatted html
     */
    function _dumpCloseTag(tags) {
        var html = '';

        tags.reverse().forEach(function (tag, index) {
            // dump non-excluded tags only
            if (-1 === EXCLUDE_TAGS.indexOf(tag)) {
                html += '</' + tag + '>';
            }
        });

        return html;
    }

    /**
     * @private
     * @method _getTag
     * @param {String} string original html
     * @description processed tag string to get pure tag name
     * @return {String} tag name
     */
    function _getTag(string) {
        var tail = string.indexOf(' ');

        // TODO: 
        // we have to figure out how to handle non-well-formatted HTML case
        if (-1 === tail) {
            tail = string.indexOf('>');
            if (-1 === tail) {
                throw new Error('HTML tag is not well-formed : ' + string);
            }
        }

        return string.substring(1, tail);
    }

    options = options || EMPTY_OBJECT;
    options.ellipsis = options.ellipsis || DEFAULT_TRUNCATE_SYMBOL;
    options.truncateLastWord = (options.truncateLastWord === undefined) ? true : options.truncateLastWord;

    while (matches) {
        matches = HTML_TAG_REGEX.exec(string);

        if (!matches) {
            if (total < maxLength) {
                content += string.substring(0, maxLength - total);
            }
            break;
        }

        result = matches[0];
        index = matches.index;

        if (total + index > maxLength) {
            // exceed given `maxLength`, dump everything to clear stack
            content += (string.substring(0, maxLength - total));
            break;
        } else {
            total += index;
            content += string.substring(0, index);
        }

        if ('/' === result[1]) {
            // move out open tag
            items.pop();
        } else {
            selfClose = SELF_CLOSE_REGEX.exec(result);
            if (!selfClose) {
                tag = _getTag(result);

                items.push(tag);
            }
        }

        if (selfClose) {
            content += selfClose[0];
        } else {
            content += result;
        }
        string = string.substring(index + result.length);
    }

    if (string.length > maxLength && options.ellipsis) {
        if (options.truncateLastWord) {
            content += options.ellipsis;
        } else {
            content = content.replace(/ \w*$/, options.ellipsis);
        }
    }
    content += _dumpCloseTag(items);

    if (!options.keepImageTag) {
        content = _removeImageTag(content);
    }

    return content;
};

module.exports = Utility;