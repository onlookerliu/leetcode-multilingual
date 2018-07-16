object Solution {
  def lengthOfLongestSubstring(s: String): Int =
    s.zipWithIndex.foldLeft((0, -1, Map[Char, Int]())) { case ((len, start_pos, map), (char, i)) =>
      val last_pos = map.getOrElse(char, -1)
      if (last_pos >= start_pos) (len max (i - last_pos), last_pos, map + (char -> i))
      else (len max (i - start_pos), start_pos, map + (char -> i))
    }._1
}