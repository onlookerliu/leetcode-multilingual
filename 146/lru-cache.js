var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.obj = {};
    this.arr = [];
};

LRUCache.prototype.get = function(key) {
    let val = this.obj[key];
    if (val > 0) {
        let index = this.arr.indexOf(key);
        this.arr.splice(index, 1);
        this.arr.unshift(key);
        return val;
    } else return -1;
}

LRUCache.prototype.put = function(key, value) {
    if (this.obj[key]) {
        this.obj[key] = value;
        let index = this.arr.indexOf(key);
        this.arr.splice(index, 1);
        this.arr.unshift(key);
        return;
    }

    if (this.capacity == this.arr.length) {
        let k = this.arr.pop();
        this.obj[k] = undefined;
    }

    this.obj[key] = value;
    this.arr.unshift(key);
};