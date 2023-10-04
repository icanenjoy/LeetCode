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
                if(Y<grid[i][y]) Y = grid[i][y];
            }
            for(let x=0;x<grid.length;x++){
                if(X<grid[x][j]) X = grid[x][j];
            }
            ans -= grid[i][j];
            grid[i][j] = X>Y ? Y:X;
            ans += grid[i][j];
        }
    }
    return ans;
};