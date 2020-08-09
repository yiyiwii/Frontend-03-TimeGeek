/**
 * Exercise: 在一个字符串中，找到字符”a”
 * @param {string} string The string
 */
function match(string) {
    for (let c of string) {
      if (c === "a")
        return true;
    }
    return false;
  }