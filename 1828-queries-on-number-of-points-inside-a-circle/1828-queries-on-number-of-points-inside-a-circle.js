/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */
var countPoints = function(points, queries) {
    let ans = [];
    for(let i=0;i<queries.length;i++){
        const minX = queries[i][0]-queries[i][2];
        const maxX = queries[i][0]+queries[i][2];
        const minY = queries[i][1]-queries[i][2];
        const maxY = queries[i][1]+queries[i][2];
        let check = 0;
        for(let j=0;j<points.length;j++){
            //if(points[j][0]>=minX && points[j][0]<=maxX && points[j][1]>=minY && points[j][1]<=maxY){ 
                if(Math.sqrt((points[j][0]-queries[i][0])**2+(points[j][1]-queries[i][1])**2) <= queries[i][2])
                    check++;
            //}
        }
        ans.push(check);
        
    }
    return ans
};