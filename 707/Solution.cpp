class MyLinkedList {
public:
    /** Initialize your data structure here. */
    MyLinkedList(): head_(nullptr), tail_(nullptr), size_(0) {}
    
    ~MyLinkedList() {
        Node* node = head_;
        while (node) {
            Node* cur = node;
            node = node->next;
            delete cur;
        }
        head_ = nullptr;
        tail_ = nullptr;
    }

    /** Get the value of the index-th node in the linked list. If the index is invalid, return -1. */
    int get(int index) {
        if (index < 0 || index >= size_) return -1;
        auto node = head_;
        while (index--)
            node = node->next;
        return node->val;
    }
    
    /** Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. */
    void addAtHead(int val) {
        head_ = new Node(val, head_);
        if (size_++ == 0)
            tail_ = head_;
    }
    
    /** Append a node of value val to the last element of the linked list. */
    void addAtTail(int val) {
        auto node = new Node(val);
        if (size_++ == 0) {
            head_ = tail_ = node;
        } else {
            tail_->next = node;
            tail_ = tail_->next;
        }
    }
    
    /** Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. */
    void addAtIndex(int index, int val) {
        if (index < 0 || index > size_) return;
        if (index == 0) return addAtHead(val);
        if (index == size_) return addAtTail(val);
        Node dummy(0, head_);
        Node* prev = &dummy;
        while (index--) prev = prev->next;
        prev->next = new Node(val, prev->next);
        ++size_;
    }
    
    /** Delete the index-th node in the linked list, if the index is valid. */
    void deleteAtIndex(int index) {
        if (index < 0 || index >= size_) return;
        Node dummy(0, head_);
        Node* prev = &dummy;
        for (int i = 0; i < index; ++i)
            prev = prev->next;
        Node* node_to_delete = prev->next;
        prev->next = node_to_delete->next;
        if (index == 0) head_ = prev->next;
        if (index == size_ - 1) tail_ = prev;
        delete node_to_delete;
        --size_;
    }

private:
    struct Node {
        int val;
        Node* next;
        Node(int _val): Node(_val, nullptr) {}
        Node(int _val, Node* _next): val(_val), next(_next) {}
    };
    Node* head_;
    Node* tail_;
    int size_;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * MyLinkedList obj = new MyLinkedList();
 * int param_1 = obj.get(index);
 * obj.addAtHead(val);
 * obj.addAtTail(val);
 * obj.addAtIndex(index,val);
 * obj.deleteAtIndex(index);
 */