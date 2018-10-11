class MyHashSet:

    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.buckets = 1000
        self.table = [[]] * self.buckets

    def hash(self, key):
        return key % self.buckets

    def pos(self, key):
        return key // self.buckets

    def add(self, key):
        """
        :type key: int
        :rtype: void
        """
        hash_key = self.hash(key)
        if not self.table[hash_key]:
            self.table[hash_key] = [0] * (self.buckets + 1)
        self.table[hash_key][self.pos(key)] = 1

    def remove(self, key):
        """
        :type key: int
        :rtype: void
        """
        hash_key = self.hash(key)
        if self.table[hash_key]:
            self.table[hash_key][self.pos(key)] = 0

    def contains(self, key):
        """
        Returns true if this set did not already contain the specified element
        :type key: int
        :rtype: bool
        """
        hash_key = self.hash(key)
        return (self.table[hash_key] != []) and (self.table[hash_key][self.pos(key)] == 1)


# Your MyHashSet object will be instantiated and called as such:
# obj = MyHashSet()
# obj.add(key)
# obj.remove(key)
# param_3 = obj.contains(key)
