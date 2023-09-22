/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var smallestDivisor = function(nums, threshold) {

    function calculateSum(divisor) { 
        let sum = 0;
        for (const num of nums) { 
            sum += Math.ceil(num / divisor); // - 숫자들을 mid값으로 나눠올린 값들의 합
        }
        return sum;
    }
    
    let left = 1; // 최소 divisor 값
    let right = Math.max(...nums); // 최대 divisor 값 (가장 큰 nums 배열 요소)
    
    while (left < right) {
        const mid = Math.floor((left + right) / 2); // - 최소최대더해서 나누기한값 = 중간값
        const sum = calculateSum(mid); // - 중간값을 함수에 넣음 / mid값으로 나눠올리 값들의 합
        
        if (sum > threshold) {
            // sum이 threshold를 초과하면 divisor를 늘려야 함 - 더 큰 값으로 나눠야 값이 떨어짐
            left = mid + 1;  //왼쪽값을 중간값+1해줌
        } else {
            // sum이 threshold 이하이면 divisor를 줄여야 함 - left가 최소의 divisor 값이 되도록 right를 옮겨서 연산
            right = mid;
        }
    }
    
    return left; // left가 최소 divisor 값 - mid 값을 내림했기 때문
    
};


var smallestDivisor1 = function(nums, threshold){ //시간초과~~
    let ansSum = 0;
    let ans = 0;
    nums.sort((a,b)=>a-b);
    
    for(let i=1;i<=nums[nums.length-1];i++){
        let sum = 0;
        for(let j=0;j<nums.length;j++){
            sum += Math.ceil(nums[j]/i);
        }

        if(ansSum<sum&&sum<=threshold){
            ansSum = sum;
            ans = i;
        }

        if(ansSum===threshold) break;
    }
    return ans
};