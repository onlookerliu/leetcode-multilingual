object LengthOfLastWord {
    def lengthOfLastWord(s: String): Int = {
        s.trim().split(" ").last.length
    }

    def main(args: Array[String]) {
        var s = "Hello World"
        println(lengthOfLastWord(s))
    }
}