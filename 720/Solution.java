import java.util.HashSet;

class Solution {
    public String longestWord(String[] words) {
        HashSet<String> w2 = new HashSet<>();
        for (String w : words) {
            w2.add(w);
        }
        String lw = "";
        for (String w : words) {
            if (w.length() < lw.length() || (w.length() == lw.length() && w.compareTo(lw) >= 0))
                continue;
            boolean poss = true;
            for (int i = 1; i < w.length(); i++) {
                if (!w2.contains(w.substring(0, i)))
                    poss = false;
            }
            if (poss)
                lw = w;
        }
        return lw;
    }
}