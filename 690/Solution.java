/*
// Employee info
class Employee {
    // It's the unique id of each node;
    // unique id of this employee
    public int id;
    // the importance value of this employee
    public int importance;
    // the id of direct subordinates
    public List<Integer> subordinates;
};
*/
class Solution {
    public int getImportance(List<Employee> employees, int id) {
        Map<Integer, Employee> dict = new HashMap<>();
        for (Employee e : employees) {
            dict.put(e.id, e);
        }
        return dfs(dict, id);
    }

    public static int dfs(Map<Integer, Employee> dict, int id) {
        int total = dict.get(id).importance;
        for (int ins : dict.get(id).subordinates) {
            total += dfs(dict, ins);
        }
        return total;
    }
}