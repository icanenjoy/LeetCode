/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
 
var pairSum = function(head) {
    const sumArr = [];
    while(head!==null){
        sumArr.push(head.val)
        head = head.next;
    }
    
    let ans=0;
    for(let i=0;i<sumArr.length/2;i++)
        ans = Math.max(ans,sumArr[i]+sumArr[sumArr.length-i-1])
    return ans;
};