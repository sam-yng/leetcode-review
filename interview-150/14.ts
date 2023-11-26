function longestCommonPrefix(strs: string[]): string {
    let size = strs.length

    if (size === 0) {
        return "0"
    } else if (size === 1) {
        return strs[0]
    }

    strs.sort()

    let minLength = Math.min(strs[0].length, strs[size - 1].length)
    let i = 0

    while (i < minLength && strs[0][i] === strs[size - 1][i]) {
        i++
    }

    let prefix = strs[0].substring(0, i)
    return prefix
};