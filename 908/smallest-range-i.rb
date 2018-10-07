# @param {Integer[]} a
# @param {Integer} k
# @return {Integer}
def smallest_range_i(a, k)
    return a.max - a.min - 2*k > 0 ? a.max - a.min - 2*k : 0
end