/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
    let len = path.length;
    let stack = [];
    let dir;
    for (let i = 0; i < len; i++) {
        dir = [];
        while (i < len && path[i] != '/') {
            dir.push(path[i]);
            i++;
        }

        let s = dir.join("");
        if (s == "." || s == "") {
            // do nothing
        } else if (s == "..") {
            if (stack.length) stack.pop();
        } else {
            stack.push(s);
        }
    }
    return "/" + stack.join("/");
};

let path = "/a/./b/../../c/";
console.log(simplifyPath(path));
