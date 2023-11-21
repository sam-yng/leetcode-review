function removeDuplicatesII(nums: number[]): number {
    let numOcc = 1

    for (let i = 0; i < nums.length; i++) {
        let next = i + 1
        if (nums[i] === nums[next]) {
            if (numOcc === 0) {
                nums.splice(i, 1)
                i--
            } else {
                numOcc--
            }
        } else {
            numOcc = 1
        }
    }

    return nums.length
};