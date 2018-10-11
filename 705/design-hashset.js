/**
 * Initialize your data structure here.
 */
var MyHashSet = function () {
    this.buckets = 1000;
    this.data = [];
    for (let i = 0; i < this.buckets; i++) {
        this.data.push([]);
    }
    // this.data = new Array(this.buckets).map(e => []);
};

MyHashSet.prototype.hash = function (key) {
    return key % this.buckets;
};

MyHashSet.prototype.pos = function (key) {
    return (key - this.hash(key)) / this.buckets;
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
    let hashKey = this.hash(key);
    if (this.data[hashKey].length == 0) {
        for (let i = 0; i <= this.buckets; i++) {
            this.data[hashKey].push(0);
        }
    }
    this.data[hashKey][this.pos(key)] = 1;
    return;
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
    let hashKey = this.hash(key);
    if (this.data[hashKey].length)
        this.data[hashKey][this.pos(key)] = 0;
    return;
};

/**
 * Returns true if this set did not already contain the specified element 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
    let hashKey = this.hash(key);
    return this.data[hashKey].length != 0 && this.data[hashKey][this.pos(key)] == 1;
};

/** 
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = Object.create(MyHashSet).createNew()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
let obj = new MyHashSet();
obj.add(1);
obj.add(1);
obj.add(2);
console.log(obj.contains(3));
obj.add(4);
console.log(obj.contains(4));