function threeSum(nums: number[]): number[][] {
    // worth noting that i got a lot of help online to solve this

    // sort the array
    nums.sort((a, b) => a - b);
    // create a string set to place number combinations in
    // this ensures the resulting array will contain 0 duplicates
    let result: Set<string> = new Set();

    for (let i = 0; i < nums.length - 2; i++) {
        // declare left and right pointer
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            // if sum is equal to 0, add combination to our set
            if (sum === 0) {
                result.add(JSON.stringify([nums[i],  nums[left], nums[right]]));
                left++;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    console.log(result)

    // return our set as a 2d array of numbers
    return Array.from(result, (result => JSON.parse(result)));
}