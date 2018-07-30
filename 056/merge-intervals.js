/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
function Interval(start, end) {
    this.start = start;
    this.end = end;
};

/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function (intervals) {
    let res = [];
    if (!intervals.length) return res;
    intervals.sort((a, b) => {
        if (a.start != b.start) {
            return a.start - b.start;
        }
        return a.end - b.end;
    });
    res.push(intervals[0]);
    for (let i = 1, len = intervals.length; i < len; i++) {
        if (res[res.length-1].end < intervals[i].start) {
            res.push(intervals[i]);
        } else {
            res[res.length-1].end = Math.max(res[res.length-1].end, intervals[i].end);
        }
    }
    return res;
};

let interval1 = new Interval(1, 3);
let interval2 = new Interval(2, 6);
let intervals = [interval1, interval2];
merge(intervals);
