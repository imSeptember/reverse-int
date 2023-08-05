module.exports = function reverse (n) {
   let splited = n.split("");
   let reversed = splited.reverse();
   let joined = reversed.join("");
    return joined;
}
