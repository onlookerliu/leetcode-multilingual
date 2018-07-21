/**
 * PopulatingNextRightPointersInEachNode
 */
public class PopulatingNextRightPointersInEachNode {

    class TreeLinkNode {
        int val;
        TreeLinkNode left, right, next;

        TreeLinkNode(int x) {
            val = x;
        }
    }

    public void connect(TreeLinkNode root) {
        if (root != null) {
            connect(root.left);
            connect(root.right);
            TreeLinkNode left = root.left, right = root.right;
            while (left != null && right != null) {
                left.next = right;
                left = left.right;
                right = right.left;
            }
        }
    }
}