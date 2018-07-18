import java.util.HashMap;
import java.util.Stack;

public class ValidParentheses {
    public boolean isValid(String s) {

        if (s == null || s.length() % 2 == 1) {
            return false;
        }

        HashMap<Character, Character> map = new HashMap<Character, Character>();
        map.put('(', ')');
        map.put('[', ']');
        map.put('{', '}');

        Stack<Character> stack = new Stack<Character>();

        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);

            if (map.keySet().contains(c)) {
                stack.push(c);

            } else if (map.values().contains(c)) {

                if (!stack.empty() && map.get(stack.peek()) == c) {
                    stack.pop();
                } else {
                    return false;
                }
            }
        }

        return stack.empty();
    }

    public static void main(String[] args) {
        System.out.println(new ValidParentheses().isValid("{(})"));
        System.out.println(new ValidParentheses().isValid("{({})}"));
        System.out.println(new ValidParentheses().isValid("{([])}"));
    }
}