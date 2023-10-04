/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

var deepestLeavesSum = function(root) {
    let list = [root];
    while (list.length){
        let len = list.length; // 1 - list 길이가 쪼개져서2됨
        let res = 0; // ... - 초기화 
        for(let i = 0; i<len; i++){ // ... - 2
            let each = list.shift(); // 첫 노드 들어감 - 왼쪽 노드, 오른쪽 순서대로 꺼냄
            res += each.val; // 1 - 2,3더함(계층을 더함)
            if (each.left) list.push(each.left); //왼쪽 노드 쪼개져서 list에 들어감-for처음에 왼쪽 노드 에서 왼쪽 노드 쪼개고 for두번째에서 오른쪽의 왼쪽 노드 쪼갬
            if (each.right) list.push(each.right);//오른쪽 노드 쪼개져서 list에 들어감-for처음에 왼쪽 노드에 오른쪽 노드 쪼개고 for 두번째에서 오른쪽의 오른쪽 노드 쪼갬
        }
        if (!list.length) return res; // 만약에 list에 더이상 값이 들어오지 않으면 최대 깊이. 그러므로 그 계층에서 더한 res를 반환
    }
        
};