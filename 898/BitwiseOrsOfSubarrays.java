import java.util.HashSet;
import java.util.Set;

public class BitwiseOrsOfSubarrays {
    public int subarrayBitwiseORs(int[] A) {
        Set<Integer> ans = new HashSet<>();
        Set<Integer> cur = new HashSet<>();
        for (int a : A) {
            Set<Integer> nxt = new HashSet<>();
            nxt.add(a);
            for (int b : cur)
                nxt.add(a | b);
            ans.addAll(nxt);
            cur = nxt;
        }
        return ans.size();
    }

    public static void main(String[] args) {
        BitwiseOrsOfSubarrays sol = new BitwiseOrsOfSubarrays();
        int[] A = {1, 1, 2};
        System.out.println(sol.subarrayBitwiseORs(A));
    }
}
