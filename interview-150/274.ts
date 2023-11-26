function hIndex(citations: number[]): number {
    const sortedArr = citations.sort((a, b) => b - a)

    for (let i = 0; i < sortedArr.length; i++) {
        if (i >= sortedArr[i]) {
            return i
        }
    }

    return citations.length
};