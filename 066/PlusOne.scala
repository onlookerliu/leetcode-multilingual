object PlusOne {
  def plusOne(digits: Array[Int]): Array[Int] = {
    val buffer = new collection.mutable.ArrayBuffer[Int]()
    val c = digits.foldRight(1) { (carry, digit) =>
      buffer += (carry + digit) % 10
      (carry + digit) / 10
    }
    if (c != 0)
      buffer += c
    buffer.reverse.toArray
  }

  def main(args: Array[String]): Unit = {
    var digits = Array(1, 2, 3)
    println(plusOne(digits))
  }

}
