import java.util.*

class ValidParentheses {
    fun isValid(s: String): Boolean {
        val stack = Stack<Char>()
        val map = mapOf(')' to '(', ']' to '[', '}' to '{')
        return s.all {
            if (it !in map) {
                stack.add(it)
            } else {
                !stack.isEmpty() && stack.pop() == map[it]
            }
        } && stack.isEmpty()
    }
}

fun main(args: Array<String>) {
    println(ValidParenthesis().isValid("{(})"))
    println(ValidParenthesis().isValid("{({})}"))
    println(ValidParenthesis().isValid("{([])}"))
}