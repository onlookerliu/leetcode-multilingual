/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
var insert = function (intervals, newInterval) {
    let res = [];
    let n = intervals.length;
    let cur = 0;
    while (cur < n && intervals[cur].end < newInterval.start) {
        res.push(intervals[cur++]);
    }
    while (cur < n && intervals[cur].start <= newInterval.end) {
        newInterval.start = Math.min(newInterval.start, intervals[cur].start);
        newInterval.end = Math.max(newInterval.end, intervals[cur].end);
        cur++;
    }
    res.push(newInterval);
    while (cur < n) {
        res.push(intervals[cur++]);
    }

    return res;
};

var insert = function(intervals, newInterval) {
    let res = [];
    let n = intervals.length, cur = 0;

    for (let i = 0; i < n; i++) {
        if (intervals[i].end < newInterval.start) {
            res.push(intervals[i]);
            cur++;
        } else if (intervals[i].start > newInterval.end) {
            res.push(intervals[i]);
        } else {
            newInterval.start = Math.min(newInterval.start, intervals[i].start);
            newInterval.end = Math.max(newInterval.end, intervals[i].end);
        }
    }
    res.splice(cur, 0, newInterval);
    return res;
};