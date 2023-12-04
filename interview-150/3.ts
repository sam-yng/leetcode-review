function lengthOfLongestSubstring(s: string): number {
    // very similar solution to problem 209 (see that solution first)
    let result: number = 0
    let subString: string = ""
    let k: number = 0

    for (let i = 0; i < s.length; i++) {
        for (k; k < s.length; k++) {
            // if our string contains s[k] we terminate the loop
            if (subString.includes(s[k])) {
                break
            }
            // otherwise add s[k] onto the end of our string
            subString = subString + s[k]
        }

        // result will equal the larger value out of the previous integer
        // or the current length of our string
        result = Math.max(result, subString.length)

        // remove the first letter of our substring and start the loop again
        subString = subString.substring(1)
    }

    return result
};