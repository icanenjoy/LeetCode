/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function(n) {
    n = n.split("");
    return Math.max(...n);
};