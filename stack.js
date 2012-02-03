var Stack = function () {
    this.items = [];
};

Stack.prototype = {
    size: function () {
        return this.items.length;
    },

    push: function (key) {
        this.items.push(key);
    },

    pop: function () {
        return this.items.pop();
    },
    
    dumpCloseTag: function () {
        var html = '',
            i, len, tag;

        for(i = 0, len = this.size(); i < len; ++i) {
            tag = this.pop();
            html += '</' + tag.tag + '>';
        }
        
        return html;
    }
};

module.exports = new Stack();
