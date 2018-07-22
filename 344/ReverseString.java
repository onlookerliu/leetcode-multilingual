/**
 * ReverseString
 */
public class ReverseString {

    public String reverseString(String s) {
        char[] temp = new char[s.length()];
        for (int i = 0, j = s.length() - 1; i < s.length(); i++, j--)
            temp[i] = s.charAt(j);
        return new String(temp);
    }
}