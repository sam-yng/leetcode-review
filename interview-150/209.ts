function minSubArrayLen(target: number, nums: number[]): number {
    // declare our sum, iterator, and result variables
    // result must be a large integer as we are looking for the smallest length
    // the k iterator is declared here as it will be used outside of the nested loop
    // and must not reset at the start of each loop iteration
    let sum: number = 0
    let k: number = 0
		// i got the infinity idea from other sliding window algorithm techniques
    let result: number = Infinity

    for (let i = 0; i < nums.length; i++) {
        // this will loop while k is less than the length of our array
        // and sum is less than our target integer
        for (k; k < nums.length && sum < target; k++) {
            sum += nums[k]
        }

        // if sum remains to be less than target after the k loop completes
        // the i loop will terminate, resulting in a returned value of 0
        if (sum < target) {
            break
        }

        // result will now equal the lesser value out of
        // the previous loop iterations result or the current loop iterations result
        result = Math.min(result, k - i)

        // sum will not equal itself minus the initial nums value
        sum -= nums[i]
    }

    // if result still equals infinity return 0
    // else return the result value
    return result === Infinity ? 0 : result
};