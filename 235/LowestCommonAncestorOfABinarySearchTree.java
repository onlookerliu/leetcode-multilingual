/**
 * LowestCommonAncestorOfABinarySearchTree
 */
public class LowestCommonAncestorOfABinarySearchTree {

    public class TreeNode {
        int val;
        TreeNode left;
        TreeNode right;
        TreeNode(int x) {
            val = x;
        }
    }

    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        int value, leftValue = p.val, rightValue = q.val;
        
        while (null != root) {
            value = root.val;
            if (leftValue > value && rightValue > value) {
                root = root.right;
            } else if (leftValue < value && rightValue < value) {
                root = root.left;
            } else break;
        }
        return root;
    }
    
}