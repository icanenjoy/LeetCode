/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function(n) {
    return Math.max(...(n.split("")));
}; //어차피 이진수라 가장큰값으로 더해야함. 그래서 숫자를 하나씩 나눠서 그 중 가장 큰 값을 반환하면 됨