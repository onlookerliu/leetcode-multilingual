class Solution {
    public:
        vector<Interval> insert(vector<Interval>& intervals, Interval newInterval) {
            vector<Interval> res;
            int n = intervals.size(), cur = 0;
            while (cur < n && intervals[cur].end < newInterval.start) {
                res.push_back(intervals[cur++]);
            }
            while (cur < n && intervals[cur].start <= newInterval.end) {
                newInterval.start = min(newInterval.start, intervals[cur].start);
                newInterval.end = max(newInterval.end, intervals[cur].end);
                cur++;
            }
            res.push_back(newInterval);
            while (cur < n) {
                res.push_back(intervals[cur++]);
            }
            return res;
        }
};


class Solution {
    public:
    vector<Interval> insert(vector<Interval>& intervals, Interval newInterval) {
        vector<Interval> res;
        int n = intervals.size(), cur = 0;
        for (int i = 0; i < n; ++i) {
            if (intervals[i].end < newInterval.start) {
                res.push_back(intervals[i]);
                ++cur;
            } else if (intervals[i].start > newInterval.end) {
                res.push_back(intervals[i]);
            } else {
                newInterval.start = min(newInterval.start, intervals[i].start);
                newInterval.end = max(newInterval.end, intervals[i].end);
            }
        }
        res.insert(res.begin() + cur, newInterval);
        return res;
    }
};

class Solution {
    public:
    vector<Interval> insert(vector<Interval>& intervals, Interval newInterval) {
        vector<Interval> res;
        int n = intervals.size(), cur = 0, i = 0;
        while (i < n) {
            if (intervals[i].end < newInterval.start) {
                res.push_back(intervals[i]);
                ++cur;
            } else if (intervals[i].start > newInterval.end) {
                res.push_back(intervals[i]);
            } else {
                newInterval.start = min(newInterval.start, intervals[i].start);
                newInterval.end = max(newInterval.end, intervals[i].end);
            }
            ++i;
        }
        res.insert(res.begin() + cur, newInterval);
        return res;
    }
};

class Solution {
    public:
    vector<Interval> insert(vector<Interval>& intervals, Interval newInterval) {
        vector<Interval> res;
        vector<Interval>::iterator it = intervals.begin();
        int cur = 0;
        while (it != intervals.end()) {
            if (it->end < newInterval.start) {
                res.push_back(*it);
                ++cur;
            } else if (it->start > newInteval.end) {
                res.push_back(*it);
            } else {
                newInterval.start = min(newInterval,start, it->start);
                newInterval.end = max(newInterval.end, it->end);
            }
            ++it;
        }
        res.insert(res.begin() + cur, newInterval);
        return res;
    }
};