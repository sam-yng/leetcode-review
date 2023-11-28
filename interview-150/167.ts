function twoSum(numbers: number[], target: number): number[] {
    // initial solution (passes all test cases with minimal memory use)
    // for (let i = 0; i < numbers.length; i++) {
    //     for (let k = 1; k < numbers.length; k++) {
    //         if (numbers[i] + numbers[k] === target && i !== k) {
    //             return [i + 1, k + 1]
    //         }
    //     }
    // }

    // declare left and right pointers
    let left: number = 0
    let right: number = numbers.length - 1

    for (let i = 0; i < numbers.length; i++) {
        // if numbers add up to target, return the indexes in the form of an array
        if (numbers[left] + numbers[right] === target) {
            return [left + 1, right + 1]
        // if the sum is greater than the target, decrement right pointer
        } else if (numbers[left] + numbers[right] > target) {
            right--
        // if the sum is less than the target, increment the left pointer
        } else {
            left++
        }
    }

		// the function will never reach this return statement
		return []
};