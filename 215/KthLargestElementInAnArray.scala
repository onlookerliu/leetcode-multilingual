import scala.collection.mutable

object KthLargestElementInAnArray {
  def findKthLargest(nums: Array[Int], k: Int): Int = {
    val q = new mutable.PriorityQueue[Int]()
    nums.foreach(q += _)
    var result: Int = 0
    for (i <- 0 until k)
      result = q.dequeue()

    result
  }

  def main(args: Array[String]): Unit = {
    val nums = Array(3,2,3,1,2,4,5,5,6)
    val k = 4
    println(findKthLargest(nums, k))
  }
}
