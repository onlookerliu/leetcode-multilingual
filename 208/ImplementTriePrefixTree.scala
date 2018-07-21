object ImplementTriePrefixTree {
  class Trie() {

    class TrieNode {
      var isWord = false
      var next: Array[TrieNode] = Array.fill(26)(null)
    }

    /** Initialize your data structure here. */
    val trieNode = new TrieNode

    /** Inserts a word into the trie. */
    def insert(word: String) {
      val lastNode = word.foldLeft(trieNode) { (node, char) =>
        val index = char - 'a'
        if (node.next(index) == null)
          node.next(index) = new TrieNode
        node.next(index)
      }
      lastNode.isWord = true
    }

    private def find(word: String): Option[TrieNode] = {
      val len = word.length

      @annotation.tailrec
      def loop(i: Int, node: TrieNode): Option[TrieNode] =
        if (node == null) None
        else if (i == len) Some(node)
        else {
          val index = word(i) - 'a'
          loop(i + 1, node.next(index))
        }

      loop(0, trieNode)
    }

    /** Returns if the word is in the trie. */
    def search(word: String): Boolean = {
      find(word) match {
        case None => false
        case Some(node) => node.isWord
      }
    }

    /** Returns if there is any word in the trie that starts with the given prefix. */
    def startsWith(prefix: String): Boolean = {
      find(prefix) match {
        case None => false
        case Some(_) => true
      }
    }

  }

  /**
    * Your Trie object will be instantiated and called as such:
    * var obj = new Trie()
    * obj.insert(word)
    * var param_2 = obj.search(word)
    * var param_3 = obj.startsWith(prefix)
    */
  def main(args: Array[String]): Unit = {
    var obj = new Trie()
    obj.insert("apple")
    var param_1 = obj.search("apple")
    println(param_1)
    var param_2 = obj.search("app")
    println(param_2)
    var param_3 = obj.startsWith("app")
    println(param_3)
    obj.insert("app")
    var param_4 = obj.search("app")
    println(param_4)
  }

}
