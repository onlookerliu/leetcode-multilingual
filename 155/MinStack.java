import java.util.Stack;

public class MinStack {
    private int min_val = Integer.MAX_VALUE;
    private Stack<Integer> s = new Stack<>();

    public MinStack() {}

    public void push(int x) {
        if (x <= min_val) {
            s.push(min_val);
            min_val = x;
        }
        s.push(x);
    }

    public void pop() {
        if (s.pop() == min_val) min_val = s.pop();
    }

    public int top() {
        return s.peek();
    }

    public int getMin() {
        return min_val;
    }
}