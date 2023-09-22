/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    const num = {}; //groupSizes에 있는 숫자들을 정리할 객체
    const ans = []; //답 배열
    groupSizes.forEach((i)=>{ //groupSizes 숫자들 정리과정
        if(num[i]) num[i]++;
        else num[i] = 1;
    })

    const keys = Object.keys(num); // 객체에 키들 - 어떤 숫자가 있는지 파악
    let sumAns = []; //서브배열
    for(let i=0;i<keys.length;i++){ //있는 숫자들 돌기 ex)1,3
        if(keys[i]*1<=num[keys[i]]){ //만약 있는 숫자(3)가 갯수보다 같거나 크면(6개있음)
            for(let j=0;j<groupSizes.length;j++){ //groupSizes 돌기
                if(groupSizes[j]===keys[i]*1) sumAns.push(j) //groupSizes에 j번째 값이 키값과 일치하면 인덱스 j를 서브배열에 저장
                if(sumAns.length===keys[i]*1){ //만약 서브배열 길이가 있는 숫자(3)와 일치하면 
                    ans.push(sumAns); //정답배열에 저장하고
                    sumAns=[]; //초기화
                }
            }
        }
    }
    return ans;
};