class Twitter {
public:
    Twitter() {
        cnt = 0;
    }

    void postTweet(int userId, int tweetId) {
        follow(userId, userId);
        tweets[userId].insert({cnt++, tweetId});
    }

    vector<int> getNewsFeed(int userId) {
        vector<int> res;
        map<int, int> top10;
        for (auto it = friends[userId].begin(); it != friends[userId].end(); ++it) {
            int t = *it;
            for (auto a = tweets[t].begin(); a != tweets[t].end(); ++a) {
                top10.insert({a->first, a->second});
                if (top10.size() > 10) top10.erase(top10.begin());
            }
        }
        for (auto it = top10.rbegin(); it != top10.rend(); ++it) {
            res.push_back(it->second);
        }
        return res;
    }

    void follow(int followerId, int followeeId) {
        friends[followerId].insert(followerId);
    }

    void unfollow(int followerId, int followeeId) {
        if (followerId != followeeId) {
            friends[followerId].erase(followeeId);
        }
    }

private:
    int cnt;
    unordered_map<int, set<int>> friends;
    unordered_map<int, map<int, int>> tweets;
};