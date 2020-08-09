/**
 * Exercise: 使用状态机完成”abababx”的处理
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
    if (c === "a") {
        return foundA1;
    } else {
        return start(c);
    }
}

function end(c) {
    return end;
}

function foundA1(c) {
    if (c === "b") {
        return foundB1;
    } else {
        return start(c);
    }
}

function foundB1(c) {
    if (c === "a") {
        return foundA2;
    } else {
        return start(c);
    }
}

function foundA2(c) {
    if (c === "b") {
        return foundB2;
    } else {
        return start(c);
    }
}

function foundB2(c) {
    if (c === "a") {
        return foundA3;
    } else { 
        return start(c);
    }
}

function foundA3(c) {
    if (c === "b") {
        return foundB3;
    } else { 
        return start(c);
    }
}

function foundB3(c) {
    if (c === 'x') {
        return end(c);
    } else {
        return foundB1(c);
    }
}

console.log(match("abababx"));