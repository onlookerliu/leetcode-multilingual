class MyLinkedList {
    class Node {
        public int val;
        public Node next;
        public Node(int val) {
            this.val = val;
            this.next = null;
        }
        public Node(int val, Node next) {
            this.val = val;
            this.next = next;
        }
    }

    private Node head;
    private Node tail;
    private int size;

    public MyLinkedList() {
        this.head = this.tail = null;
        this.size = 0;
    }

    private Node getNode(int index) {
        Node n = new Node(0, this.head);
        while (index-- >= 0) {
            n = n.next;
        }
        return n;
    }

    public int get(int index) {
        if (index < 0 || index >= size)
            return -1;
        return getNode(index).val;
    }

    public void addAtHead(int val) {
        this.head = new Node(val, this.head);
        if (this.size++ == 0)
            this.tail = this.head;
    }

    public void addAtTail(int val) {
        Node n = new Node(val);
        if (this.size++ == 0)
            this.head = this.tail = 0;
        else
            this.tail = this.tail.next = n;
    }

    public void addAtIndex(int index, int val) {
        if (index < 0 || index > this.size) return;
        if (index == 0) {
            this.addAtHead(val);
            return;
        }
        if (index == size) {
            this.getNode(index - 1);
            return;
        }
        Node prev = this.getNode(index - 1);
        prev.next = new Node(val, prev.next);
        ++this.size;
    }

    public void deleteAtIndex(int index) {
        if (index < 0 || index >= this.size) return;
        Node prev = this.getNode(index - 1);
        prev.next = prev.next.next;
        if (index == 0) this.head = prev.next;
        if (index == this.size - 1) this.tail = prev;
        --this.size;
    }
}