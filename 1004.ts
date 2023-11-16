function longestOnes(nums: number[], k: number): number {
    let zeroCount: number = k
    let largestLength: number = 0
    let length: number = 0
    let i: number = 0
    let initialIndex: number = i

    while (i < nums.length + k) {
        console.log({
            i,
            initialIndex,
            zeroCount
        })
        if (zeroCount >= nums.length) {
            return nums.length
        }
        if (zeroCount === 0) {
            console.log(nums.slice(initialIndex, i))
            length = nums.slice(initialIndex, i).length
            if (length > largestLength) {
                largestLength = length
            }
            i = initialIndex + 1
            initialIndex++
            zeroCount = k
            continue
        }
        if (nums[i] === 0) {
            zeroCount--
        }
        i++
    }

    return largestLength
};