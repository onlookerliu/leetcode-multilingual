/*
// Definition for a Node.
class Node {
    public int val;
    public List<Node> children;

    public Node() {}

    public Node(int _val,List<Node> _children) {
        val = _val;
        children = _children;
    }
};
*/
class Solution {
    public int maxDepth(Node root) {
        if (null == root) return 0;
        int depth = 0;
        for (Node child : root.children) {
            depth = depth > maxDepth(child) ? depth : maxDepth(child);
        }
        return depth + 1;
    }
}