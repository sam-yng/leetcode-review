function equalPairs(grid: number[][]): number {
    let transposed: number[][] =  grid[0].map((col, c) => grid.map((row, r) => grid[r][c]))
    let matches: number = 0

    for (let i = 0; i < grid.length; i++) {
        for (let k = 0; k < transposed.length; k++) {
            if (grid[i].toString() === transposed[k].toString()) {
                matches += 1
            }
        }
    }

    return matches
};