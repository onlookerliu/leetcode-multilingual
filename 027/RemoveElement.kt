class RemoveElement {
    fun removeElement(nums: IntArray, `val`: Int): Int {
        var non_val_size = 0
        for (i in nums)
            if (i != `val`)
                nums[non_val_size++] = i
        
        return non_val_size
    }
}