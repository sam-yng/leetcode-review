function lengthOfLastWord(s: string): number {
    let word = s.trim().split(" ");
    return word[word.length - 1].length
};