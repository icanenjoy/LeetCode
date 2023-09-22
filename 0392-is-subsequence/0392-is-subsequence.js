/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    s = s.split("");
    t = t.split("");
    while(1){
        
        if(s[0]===t[0]) s.shift();
        t.shift();
        if(s.length===0 || t.length===0) break;
    }

    console.log(s);
    console.log(t);
    return s.length? false:true;
    
};