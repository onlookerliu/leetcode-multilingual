class MyHashMap:
    def __init__(self):
        self.buckets = 1000
        self.data = [[]] * self.buckets

    def hash(self, key):
        return key % self.buckets

    def pos(self, key):
        return key // self.buckets

    def put(self, key, value):
        hash_key = self.hash(key)
        if not self.data[hash_key]:
            self.data[hash_key] = [None] * (self.buckets + 1)
        self.data[hash_key][self.pos(key)] = value

    def get(self, key):
        hash_key = self.hash(key)
        if not self.data[hash_key] or self.data[hash_key][self.pos(hash_key)] is None:
            return -1
        else:
            return self.data[hash_key][self.pos(hash_key)]

    def remove(self, key):
        hash_key = self.hash(self)
        if self.data[hash_key]:
            self.data[hash_key][self.pos(key)] = None
