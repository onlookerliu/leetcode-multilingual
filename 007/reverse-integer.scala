object Solution {
    val threshold = 214748364

    def reverse(x: Int): Int = {
        @annotation.tailrec
        def loop(i: Int, acc: Int): Int = 
            if (i == 0) if (x < 0) -acc else acc
            else {
                if (acc > threshold) 0 else loop(i / 10, acc*10 + i % 10)
            }
        
        if (x == Int.MinValue) 0 else loop(x.abs, 0)
    }
}