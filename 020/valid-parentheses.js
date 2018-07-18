/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
    let stack = [], target = {};
    target['('] = ')';
    target['['] = ']';
    target['{'] = '}';

    for (let i = 0, len = s.length; i < len; i++) {
        if (!stack.length)
            stack.push(s[i]);
        else {
            if (s[i] === target[stack[stack.length - 1]])
                stack.pop();
            else
                stack.push(s[i]);
        }
    }

    return !stack.length;
}

function isValid(s) {
    let m = {'(': ')', '{': '}', '[': ']'};

    function helper(i, len, ls) {
        if (i == len)
            return ls.length == 0;
        else if (s[i] == '(' || s[i] == '{' || s[i] == '[')
            return helper(i+1, len, ls.unshift(s[i]));
        // else if (!ls.length)
        //     return false;
        else if (s[i] == m[ls[0]])
            return helper(i+1, len, ls.slice(1));
        else
            return false;
    }

    return helper(0, s.length, []);
}