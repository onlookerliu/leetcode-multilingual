class Solution {
    private:
    bool isPrime(int num) {
        if (num < 2) return false;
        for (int i = 2; i <= sqrt(num); ++i) {
            if (num % i == 0) return false;
        }
        return true;
    }

    bool isPalindrome(int num) {
        string orgNumStr = to_string(num);
        string reverseNumStr(orgNumStr.rbegin(), orgNumStr.rend());

        return (orgNumStr == reverseNumStr);
    }

    public:
    int primePalindrome(int N) {
        while(!isPalindrome(N) || !isPrime(N)) {
            ++N;

            if (N > pow(10, 1) && N < pow(10, 2) && N != 11) N = pow(10, 2);
            if (N > pow(10, 3) && N < pow(10, 4)) N = pow(10, 4);
            if (N > pow(10, 5) && N < pow(10, 6)) N = pow(10, 6);
            if (N > pow(10, 7) && N < pow(10, 8)) N = pow(10, 8);
        }
        return N;
    }
};