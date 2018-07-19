object PowXN {
    def myPow(x: Double, n: Int): Double = {
        def myPowUtil(x: Double, n: Int): Double = {
            if (n == 0) 1.0
            else if (n == 1) x
            else if (n % 2 == 0)
                myPowUtil(x * x, n / 2)
            else
                x * myPowUtil(x * x, n / 2)
        }

        if (n < 0)
            1 / myPowUtil(x, n.abs)
        else
            myPowUtil(x, n)
    }

    def main(args: Array[String]) {
        var x = 2.00000
        var n = 10
        println(myPow(x, n))
    }
}