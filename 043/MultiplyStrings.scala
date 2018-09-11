object MultiplyStrings {
  def multiply(num1: String, num2: String): String = {
    if (num1 == "0" || num2 == "0") {
      return "0"
    }

    var temp = Array.fill[Int](num1.length + num2.length)(0)
    for (i <- num1.indices) {
      for (j <- num2.indices) {
//        temp(i+j+1) += (char2Character(num1(i)) - char2Character('0')) * (char2Character(num2(j)) - char2Character('0'))
//        temp(i+j+1) += (num1(i).toInt - 49) * (num2(j).toInt - 49)
        temp(i+j+1) += num1(i).asDigit * num2(j).asDigit
      }
    }

    for (i <- temp.length-1 to 1 by -1) {
      temp(i-1) += temp(i) / 10
      temp(i) = temp(i) % 10
    }

    if (temp(0) == 0) {
      temp = temp.slice(1, temp.length)
    }

    return temp.mkString("")
  }

  def main(args: Array[String]): Unit = {
    val num1 = "123"
    val num2 = "456"
    println(multiply(num1, num2))
  }
}
