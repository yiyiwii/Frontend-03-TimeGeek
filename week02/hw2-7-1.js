/**
 * Exercise: 用状态机实现：字符串“abcabx”的解析
 * @param {string} string The string
 */
function match(string) {
    let state = start;
    for (let c of string) {
        state = state(c);
    }
    return state === end;
}

function start(c) {
    if (c === "a")
        return foundA;
    else 
        return start(c);
}

function end(c) {
    return end;
}

function foundA(c) {
    if (c === "b")
        return foundB;
    else
        return start(c);
}

function foundB(c) {
    if (c === "c") 
        return foundC;
    else s
        return start(c);
}

function foundC(c) {
    if (c === "a")
        return foundA2;
    else
        return start(c);
}

function foundA2(c) {
    if (c === "b") 
        return foundB2;
    else 
        return start(c);
}

function foundB2(c) {
    if (c === "x") 
        return end;
    else 
        return foundB(c);
}
