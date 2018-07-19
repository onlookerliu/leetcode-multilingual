class Solution {
public:
  double largestTriangleArea(vector<vector<int>>& points) {
    const int n = points.size();
    double best = 0.0;
    for (int i = 0; i < n; ++i)
      for (int j = i + 1; j < n; ++j)
        for (int k = j + 1; k < n; ++k) {          
          const double a = dist(points[i], points[j]);
          const double b = dist(points[i], points[k]);
          const double c = dist(points[j], points[k]);
          const double s = (a + b + c) / 2;
          const double area = sqrt(s * (s - a) * (s - b) * (s - c));          
          best = max(best, area);
        }
    return best;
  }
private:
  static inline double dist(const vector<int>& p1, const vector<int>& p2) {
    return sqrt((p1[0] - p2[0]) * (p1[0] - p2[0]) + (p1[1] - p2[1]) * (p1[1] - p2[1]));
  }
};