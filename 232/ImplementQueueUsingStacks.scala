object ImplementQueueUsingStacks {
  class MyQueue() {

    /** Initialize your data structure here. */
    var primary, aux = List.empty[Int]

    /** Push element x to the back of queue. */
    def push(x: Int) {
      aux = x :: aux
    }

    /** Removes the element from in front of queue and returns that element. */
    def pop(): Int = {
      if (primary.isEmpty)
        move()
      val res = primary.head
      primary = primary.tail
      res
    }

    private[MyQueue] def move(): Unit = {
      primary = aux.reverse
      aux = List.empty[Int]
    }

    /** Get the front element. */
    def peek(): Int = {
      if (primary.isEmpty)
        move()
      primary.head
    }

    /** Returns whether the queue is empty. */
    def empty(): Boolean = {
      primary.isEmpty && aux.isEmpty
    }

  }

  /**
    * Your MyQueue object will be instantiated and called as such:
    * var obj = new MyQueue()
    * obj.push(x)
    * var param_2 = obj.pop()
    * var param_3 = obj.peek()
    * var param_4 = obj.empty()
    */
  def main(args: Array[String]): Unit = {
    var obj = new MyQueue
    obj.push(1)
    obj.push(2)
    obj.push(3)
    var param_1 = obj.peek()
    println(param_1)
    var param_2 = obj.pop()
    println(param_2)
    var param_3 = obj.empty()
    println(param_3)

  }

}
