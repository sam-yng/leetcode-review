function isSubsequence(s: string, t: string): boolean {
  let i: number = 0
  let j: number = 0

  while (i < s.length && j < t.length) {
    // if a charcters of s matches a character of t
    // increment the s pointer
    if (s[i] === t[j]) {
      i += 1
    }
    // else increment the t pointer
    j += 1
  }

  // if i matches the length of string s return true
  // else return false
  return i === s.length
};