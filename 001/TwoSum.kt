class TwoSum {
    fun twoSum(numbers: IntArray, target: Int): IntArray {
        val re = IntArray(2)
        val map = hashMapOf<Int, Int>()
        for (i in numbers.indices) {
            val idx = map[numbers[i]]
            
            if (idx == null) {
                map.put(target - numbers[i], i)
            } else {
                if (idx < i) {
                    re[0] = idx
                    re[1] = i
                    return re
                }
            }
        }
        return re
    }
}