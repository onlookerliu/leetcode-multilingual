class ValidateBST {

    fun isValidBST(root: TreeNode?): Boolean {
        var node: TreeNode? = root ?: return true

        val stack = Stack<TreeNode>()
        var pre: TreeNode? = null
        while (node != null || !stack.isEmpty()) {
            while (node != null) {
                stack.push(node)
                node = node.left
            }
            node = stack.pop()
            if (pre != null && node.`val` <= pre.`val`) {
                return false
            }
            pre = node
            node = node.right
        }

        return true
    }

    data class TreeNode(
            var `val`: Int,
            var left: TreeNode? = null,
            var right: TreeNode? = null
    )

}