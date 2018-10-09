package leetcode

import scala.collection.mutable

object UncommonWordsFromTwoSentences {
  def uncommonFromSentences(A: String, B: String): Array[String] = {
    val sentenceA = A.split(" ")
    val sentenceB = B.split(" ")
    val hash1 = mutable.HashMap.empty[String, Int]
    val hash2 = mutable.HashMap.empty[String, Int]
    for (word <- sentenceA) {
      hash1(word) = hash1.getOrElseUpdate(word, 0) + 1
    }
    for (word <- sentenceB) {
      hash2(word) = hash2.getOrElseUpdate(word, 0) + 1
    }
    var res = Array.empty[String]
    val words = hash1.keySet ++ hash2.keySet
    for (word <- words) {
      if ((!hash1.contains(word) && hash2(word) == 1) || (!hash2.contains(word) && hash1(word) == 1)) {
        res = res :+ word
      }
    }
    res
  }

  def main(args: Array[String]): Unit = {
    val A = "this apple is sweet"
    val B = "this apple is sour"
    uncommonFromSentences(A, B).foreach(println)
  }

}
