module.exports = function reverse (n) {
   let string = n.toString();
   let splited = string.split("");
   let reversed = splited.reverse();
   let joined = reversed.join("");
    return parseFloat(joined);
}
