function pick(nums, target) {
    let res = [];
    for (let [index, item] of nums) {
        if (item == target)
            res.push(index);
    }

    let index = Math.floor(Math.random() * res.length);
    return res[index];
}

