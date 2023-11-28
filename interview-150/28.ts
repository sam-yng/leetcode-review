function strStr(haystack: string, needle: string): number {
    // get the size of needle
    let strSize: number = needle.length

    for (let i = 0; i < haystack.length; i++) {
        // if the new substring is equal to needle
        // return the index it is found at
        if (haystack.substring(i, i + strSize) === needle) {
            return i
        }
    }

    // otherwise return -1
    return -1
};