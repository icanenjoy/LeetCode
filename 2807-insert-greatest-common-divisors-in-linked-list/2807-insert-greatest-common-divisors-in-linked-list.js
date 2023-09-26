/**
 * Definition for singly-linked list.
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertGreatestCommonDivisors = function(head) {
    let subList = head; //subList가 head를 가리킴
    
    while(subList.next){ //subList에 값이 남아 있는 동안
        subList.next = new ListNode(makeList(subList.val, subList.next.val),subList.next); 
        //makeList에 첫번째값과 두번째 값을 넣으면 최대공약수를 반환-> 새로운 노드에 val값
        //subList.next(두번째 이후의 값들) -> 새로운 노드에 next값
        //subList.next에 val값은 최대공약수 값이므로
        subList = subList.next.next;
        //최대 공약수 값 다음 값 계산
    }
    
    return head;
};

function makeList(a,b){ //18,6 - 6,18
    if (!b)  return a; //b가 0이면 a로 나누어 떨어진 것

  return makeList(b, a % b); //6, 0 - 18, 6
    //무조건 큰값이 a에 오게됨. 
}