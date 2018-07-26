/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
function findRestaurant(list1, list2) {
    let sames = popularRestaurant(list1, list2);
    let sums = sames.map((restaurant) => list1.indexOf(restaurant) + list2.indexOf(restaurant));
    let minSum = Math.min(...sums);
    return sames.filter((restaurant) => list1.indexOf(restaurant) + list2.indexOf(restaurant) == minSum);
};

function popularRestaurant(list1, list2) {
    let res = [];

    for (let i = 0, len = list1.length; i < len; i++) {
        if (list2.indexOf(list1[i]) != -1)
            res.push(list1[i]);
    }
    return res;
}
