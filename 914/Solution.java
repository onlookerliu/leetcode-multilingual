import java.util.HashMap;

class Solution {
    public boolean hasGroupsSizeX(int[] deck) {
        HashMap<Integer, Integer> map = new HashMap<>();
        for (int card : deck) {
            map.put(card, map.getOrDefault(card, 0)+1);
        }

        int X = deck.length;
        for (Integer key : map.keySet()) {
            X = gcd(X, map.get(key));
        }
        return X >= 2;
    }

    private int gcd(int a, int b) {
        if (b == 0) {
            return a;
        }
        return gcd(b, a%b);
    }
}