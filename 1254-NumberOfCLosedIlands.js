var closedIsland = function(grid) {
    let numOfIslands = 0
    
    const findIsland = (i, j) => {
        if (grid[i][j] == 1) return true // prev cell surrounded by water this way
        if (grid[i][j] == 0) {
            grid[i][j] = 2 //mark as visited
            if (i < 1 || i >= grid.length - 1 || j < 1 || j >= grid[0].length - 1 ) return false //peripheral cell of land encountered which makes current island non-closed
            let result = true
			
            if (!findIsland(i - 1,j)) result = false
            if (!findIsland(i,j + 1)) result = false
            if (!findIsland(i + 1,j)) result = false
            if (!findIsland(i,j - 1)) result = false    //cover the rest of the island using DFS
			
            return result
        }
        
        return true
    }
    
	// only interating through non-peripheral cells
    for (let i = 1; i <= grid.length - 2; i++) {
        for (let j = 1; j <= grid[0].length - 2; j++) {
            if (grid[i][j] == 0){
                if (findIsland(i,j, true)) {
                    numOfIslands++
                }
            }
        }
    }
    
    return numOfIslands
};