/**
 * Initialize your data structure here.
 */
var MyHashMap = function () {
    this.hash = [];
};

/**
 * value will always be positive. 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
    if (key >= this.hash.length) {
        for (let i = this.hash.length; i <= key; i++)
            this.hash[i] = -1;
    }
    this.hash[key] = value;
};

/**
 * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
    if (key >= this.hash.length)
        return -1;
    return this.hash[key];
};

/**
 * Removes the mapping of the specified value key if this map contains a mapping for the key 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
    if (key >= this.hash.length)
        return;
    this.hash[key] = -1;
    return;
};

/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = Object.create(MyHashMap).createNew()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */