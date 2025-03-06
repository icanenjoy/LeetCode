/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let ans = head;
    let middleLen = 0;
    while(head!==null){
        middleLen++;
        head = head.next;
    }
    for(let i = 0; i<middleLen/2-1;i++){
        ans = ans.next;
    }
    
 return middleLen%2===0?ans.next:ans;
};