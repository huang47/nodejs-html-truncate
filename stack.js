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
    }
};

module.exports = new Stack();
