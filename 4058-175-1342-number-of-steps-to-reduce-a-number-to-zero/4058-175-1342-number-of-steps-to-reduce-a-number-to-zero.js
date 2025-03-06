/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    let ans =0;
    while(num!==0){
        if (num%2===1)
            num -=1;
        else if(num%2===0)
            num=num/2;

        ans++;
    }

    return ans;
};