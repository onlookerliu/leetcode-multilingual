class MyHashMap:

    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.size = 100000
        self.data = [[-1, -1]] * self.size

    def put(self, key, value):
        """
        value will always be positive.
        :type key: int
        :type value: int
        :rtype: void
        """
        pos = key % self.size
        while self.data[pos][0] != -1:
            if self.data[pos][0] == key:
                self.data[pos][1] = value
                return
            if pos == self.size:
                pos = -1
            pos += 1
        self.data[pos] = [key, value]


    def get(self, key):
        """
        Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key
        :type key: int
        :rtype: int
        """
        pos = key % self.size
        while self.data[pos][0] != -1:
            if self.data[pos][0] == key:
                return self.data[pos][1]
            if pos == self.size:
                pos = -1
            pos += 1
        return self.data[pos][1]


    def remove(self, key):
        """
        Removes the mapping of the specified value key if this map contains a mapping for the key
        :type key: int
        :rtype: void
        """
        self.put(key, -1)



# Your MyHashMap object will be instantiated and called as such:
# obj = MyHashMap()
# obj.put(key,value)
# param_2 = obj.get(key)
# obj.remove(key)
