const canFlip = matrix => {

    const m = matrix.length
    const n = matrix[0].length

    // const percentOfOnes = row => {
    //     let total = 0
    //     let len = row.length

    //     row.forEach(num => {
    //         if (num === 1) {
    //             total ++
    //         }
    //     })
    //     return total/len
    // }

    const dist = row => {
        let totalOnes = 0
        row.forEach(num => {
            if (num === 1) {
                totalOnes ++
            } 
        })

        let totalZeros = row.length - totalOnes
        return [totalZeros, totalOnes, Math.abs(totalOnes - totalZeros)]
    }

    const getCOlDiff = matrix => {
        let diff = 0
        for (let i = 0; i < matrix[0].length; i ++) {

            for (let j = 0; j < matrix[j][i]; j ++) {
                let totalOnes = 0
                let totalZeros = 0

                if (matrix[j][i] == 1) {
                    totalOnes ++
                } else {
                    totalZeros ++
                }
                diff += Math.abs(totalOnes - totalZeros)
            }
        }
        return diff
    }
    const flipRow = (rIndex, matrix) => {
        return matrix.map((row, rowIndex) => {
            if (rowIndex === rIndex) {
                row.map(col => 1 - col)
            }
            else return row
        })
    }

    const flipCol = (cIndex, matrix) => {
        return matrix.map(row => {
            row.map((col, colIndex) => {
                if (colIndex == cIndex) {
                    return 1 - col
                }
                return col
            })
        })
    }

    matrix.forEach((row, rIndex) => {
        // if (percentOfOnes(row) < 0.5 || ) {
        //     flip(row)
        const [totalZeros, totalOnes, diff] = dist(row)
        if (totalOnes < totalZeros) {
           
            matrix =  flipRow(rIndex, matrix)
        }
        if (totalOnes === totalZeros) {
            // col diffs
            let afterFlip = flipRow(rIndex, matrix)
            if (getCOlDiff(afterFlip) > getCOlDiff(matrix)) {
                matrix = afterFlip
            }
        }
    })

    for (let i = 0; i < matrix[0].length; i ++) {

        for (let j = 0; j < matrix[j][i]; j ++) {
            let totalOnes = 0
            let totalZeros = 0

            if (matrix[j][i] == 1) {
                totalOnes ++
            } else {
                totalZeros ++
            }
            // if evenNess increase after flip 
            // if moreZero flip

            // diff += Math.abs(totalOnes - totalZeros)
        }
    }

    // what about the sequence?? 

    // matrix.forEach((row, rIndex) => {
    //     // if (percentOfOnes(row) < 0.5 || ) {
    //     //     flip(row)
    //     const [totalZeros, totalOnes, diff] = dist(row)
    //     if (totalOnes < totalZeros) {
           
    //         matrix =  flipRow(rIndex, matrix)
    //     }
    //     if (totalOnes === totalZeros) {
    //         // col diffs
    //         let afterFlip = flipRow(rIndex, matrix)
    //         if (getCOlDiff(afterFlip) > getCOlDiff(matrix)) {
    //             matrix = afterFlip
    //         }
    //     }
    // })

}





const canFlipMatrix = matrix => {
    const flipRow = (rIndex, matrix) => {
        return matrix.map((row, rowIndex) => {
            if (rowIndex === rIndex) {
                row.map(col => 1 - col)
            }
            else return row
        })
    }

    const flipCol = (cIndex, matrix) => {
        return matrix.map(row => {
            row.map((col, colIndex) => {
                if (colIndex == cIndex) {
                    return 1 - col
                }
                return col
            })
        })
    }
    const allOnes = matrix => {
        const row = matrix.length
        const col = matrix[0].length
        for (let i = 0; i < row; i ++) {
            for (let j = 0; j < col; j ++) {
                // ... 
            }
        }



    }

    matrix.forEach((row, rowIndex) => {
        const newRowMatrix = flipRow(rowIndex, matrix)
        if (allOnes(newRowMatrix)) return true

        if (canFlip(newRowMatrix)) {
            return true
        }
        row.forEach((col, index) => {
            const newColMatrix = flipCol(index, matrix)
            if (allOnes(newColMatrix)) return true
            if (canFlip(newColMatrix)) {
                return true
            }
        })
       
    })
    return false




}