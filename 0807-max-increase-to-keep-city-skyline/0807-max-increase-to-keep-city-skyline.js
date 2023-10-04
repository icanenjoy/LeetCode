/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
    let ans =0;
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid.length;j++){
            let Y=0;
            let X=0;
            for(let y=0;y<grid.length;y++){
                if(Y<grid[i][y]) Y = grid[i][y]; //가로에서 큰값
            }
            for(let x=0;x<grid.length;x++){
                if(X<grid[x][j]) X = grid[x][j]; // 세로에서 큰값
            }
            ans -= grid[i][j];  //원래 값 빼기
            grid[i][j] = X>Y ? Y:X; // 가로 세로에서 큰값 중 작은 값을 넣음
            ans += grid[i][j]; //증가값 더하기 
            //결과적으로 (증가된값-원래값) = 증가된양만큼 더해줌 
        }
    }
    return ans;
};