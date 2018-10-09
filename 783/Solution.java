/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
import java.util.Stack;

class Solution {
    public int minDiffInBST(TreeNode root) {
        int minDiff = Integer.MAX_VALUE;
        Stack<TreeNode> s = new Stack<>();
        TreeNode curr = root, prev = null;
        while (curr != null || !s.isEmpty()) {
            while (curr != null) {
                s.push(curr);
                curr = curr.left;
            }
            curr = s.pop();
            if (prev != null)
                minDiff = Math.min(minDiff, Math.abs(curr.val - prev.val));
            prev = curr;
            curr = curr.right;
        }
        return minDiff;
    }
}