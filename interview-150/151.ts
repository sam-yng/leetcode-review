function reverseWords(s: string): string {
    // remove whitespace from input string using regexp and trim
    s = s.replace(/ +(?= )/g,'').trim()

    // convert the string to an array of strings using split
    const arr: string[] = s.split(" ")

    // reverse the array and return it as a string with reverse and join
    return arr.reverse().join(" ")
};