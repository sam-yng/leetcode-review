function equalPairs(grid: number[][]): number {
    // transpose the grid - from row x col, to col x
    const transposed: number[][] =  grid[0].map((_, c) => grid.map((_, r) => grid[r][c]))
    let matches: number = 0

    const areArraysEqual = <T>(arr1: T[], arr2: T[]): boolean => {
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                return false
            }
        }
        return true
    }

    for (let i = 0; i < grid.length; i++) {
        for (let k = 0; k < transposed.length; k++) {
            if (areArraysEqual(grid[i], transposed[k])) {
                matches += 1
            }
        }
    }

    return matches
};