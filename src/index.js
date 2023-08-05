module.exports = function reverse (n) {
    splited = n.split("");
    reversed = splited.reverse();
    joined = reversed.join("");
    return joined;
}
