/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    s = s.split("");
    t = t.split(""); 
    while(1){
        
        if(s[0]===t[0]) s.shift(); //같은 글자면 s하나 없애기
        t.shift(); //t는 계속 줄이기
        if(s.length===0 || t.length===0) break; //두 배열 중 하나라도 비워지면 종료
    }
    return s.length? false:true; // s가 남아있지 않으면 true 있으면 false
    
};