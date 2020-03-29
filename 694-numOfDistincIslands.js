
// 694. Number of Distinct Islands
// Medium

// 638

// 42

// Add to List

// Share
// Given a non-empty 2D array grid of 0's and 1's, an island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

// Count the number of distinct islands. An island is considered to be the same as another if and only if one island can be translated (and not rotated or reflected) to equal the other.

// Example 1:
// 11000
// 11000
// 00011
// 00011
// Given the above grid map, return 1.
// Example 2:
// 11011
// 10000
// 00001
// 11011
// Given the above grid map, return 3.

// Notice that:
// 11
// 1
// and
//  1
// 11
// are considered different island shapes, because we do not consider reflection / rotation.


/**
 * @param {number[][]} grid
 * @return {number}
 */
// Building the string inside the recursion by using the stack frames to index the order of the opertaion.

function numDistinctIslands(graph) {
        
    const stringBuilder = []

function depthFirst(graph, row, col, i) {

if (graph[row] && graph[row][col]) {

    stringBuilder[stringBuilder.length - 1].push(i)
    graph[row][col] = 0;
    console.log('before', stringBuilder)
    depthFirst(graph, row + 1, col, 1)
    depthFirst(graph, row - 1, col, 2)
    depthFirst(graph, row, col + 1, 3)
    depthFirst(graph, row, col - 1, 4)
    console.log('after', stringBuilder)
    stringBuilder[stringBuilder.length - 1].push(i)
}
}


if (!graph.length) return 0

graph.forEach((rows, row) => {
    rows.forEach((val, col) => {

        if (val === 1) stringBuilder.push([]),
            depthFirst(graph, row, col, 0);

    })
})
console.log('stringBuilder', stringBuilder)
return new Set(stringBuilder.map(x => x.toString())).size
}

function numDistinctIslands2(graph) {
    if (!graph.length) return 0

    const pattern = new Set()

    graph.forEach((rows, row) => {
        rows.forEach((val, col) => {
            if (val === 1) {
                pattern.add(depthFirst(graph, row, col, 'o'))
                console.log('--pattner', pattern)
            }
        })
    })
    
    return pattern.size;
}

function depthFirst(graph, row, col, di) {
    if (graph[row] && graph[row][col]) {
	
        graph[row][col] = 0;
		
        let p = di + depthFirst(graph, row + 1, col, 'd') +
            depthFirst(graph, row - 1, col, 'u') +
            depthFirst(graph, row, col + 1, 'r') +
            depthFirst(graph, row, col - 1, 'l') + 'b';
		console.log('p', p)
        return p
		
    } else return ''
}

const inputs = '11000,11000,00011,00011'.split(',').map(r => (r.split('').map(num => Number(num))))
// console.log('--input', inputs)
const input2= '11011,10000,00001,11011'.split(',').map(r => (r.split('').map(num => Number(num))))
const input3 = 
[[1,1,0],[0,1,1],[0,0,0],[1,1,1],[0,1,0]]
console.log('numDistinctIslands', numDistinctIslands2(input3))


// DFS solution: 
// whats is DFS? 
// Depth first search