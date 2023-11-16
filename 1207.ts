function uniqueOccurrences(arr: number[]): boolean {
    let sortedArr: number[] = arr.sort()
    let uniqueValues = [...new Set(sortedArr)]
    const numOcc = new Map()

    uniqueValues.forEach(el => numOcc.set(el, 0))

    for (let i = 0; i < sortedArr.length; i++) {
        for (let k = 0; k < uniqueValues.length; k++) {
            if (sortedArr[i] === uniqueValues[k]) {
                numOcc.set(uniqueValues[k], (numOcc.get(uniqueValues[k]) + 1))
            }
        }
    }

    const values = [...new Set(Array.from(numOcc.values()))]
    return values.length === uniqueValues.length ? true : false
};