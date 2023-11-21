function compress(chars: string[]): number {
    let count = 1
    let i = 0

    while (i < chars.length) {
        // if the next character in the array is new
        if (chars[i] !== chars[i + 1]) {
            // if there is more than one instance of the present character
            if (count > 1) {
                chars.splice(i - count + 2, count - 1, ...`${count}`.split(""))
                // i is last index of given letter
                i = i - count + 1 + `${count}`.length
            }
            // reset letter count
            count = 0
        }
        count += 1
        i += 1
    }

    return chars.length
};