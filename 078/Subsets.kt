class Subsets {

    fun subsets(nums: IntArray?): List<List<Int>> {
        val results = mutableListOf<List<Int>>()
        results.add(listOf())

        if (nums == null || nums.isEmpty()) {
            return results
        }

        nums.sort()

        for (i in nums) {
            val size = results.size
            for (j in 0 until size) {
                val list = mutableListOf<Int>()
                list.addAll(results[j])
                list.add(i)

                results.add(list)
            }
        }

        return results
    }

}