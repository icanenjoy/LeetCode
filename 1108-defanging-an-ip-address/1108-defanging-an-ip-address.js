/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    return address.replace(/\./g,"[.]"); // (/시작 끝/) (\.-문자열.) (g-모든) 
};