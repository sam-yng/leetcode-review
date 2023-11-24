function rotate(nums: number[], k: number): void {
    if (nums.length <= 1) {
        return
    }

    for (let i = 0; i < k; i++) {
        let arrStart = nums.shift()
        let arrEnd = nums.pop()

				nums.splice(0, 0, arrEnd!, arrStart!)
    }
};