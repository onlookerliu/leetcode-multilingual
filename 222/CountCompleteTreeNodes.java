/**
 * CountCompleteTreeNodes
 */
public class CountCompleteTreeNodes {

    class TreeNode {
        int val;
        TreeNode left;
        TreeNode right;

        TreeNode(int x) {
            val = x;
        }
    }

    private int countLeftDepth(TreeNode root) {
        if (root == null)
            return 0;
        else
            return 1 + countLeftDepth(root.left);
    }

    private int countRightDepth(TreeNode root) {
        if (root == null)
            return 0;
        else
            return 1 + countRightDepth(root.right);
    }

    private int numberOfNodesAtDepth(int depth) {
        int res = 0, base = 1;
        for (int i = 0; i < depth; i++) {
            res += base;
            base *= 2;
        }
        return res;
    }

    private int countNodes(TreeNode root, int leftDepth, int rightDepth) {
        int res = 0;
        if (root != null) {
            if (leftDepth == -1)
                leftDepth = countLeftDepth(root);
            if (rightDepth == -1)
                rightDepth = countRightDepth(root);
            if (leftDepth == rightDepth)
                res += numberOfNodesAtDepth(leftDepth);
            else
                res = 1 + countNodes(root.left, leftDepth - 1, -1) + countNodes(root.right, -1, rightDepth - 1);
        }
        return res;
    }

    public int countNodes(TreeNode root) {
        return countNodes(root, -1, -1);
    }
}