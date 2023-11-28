function isPalindromeOne(s: string): boolean {
    // regexp removes all characters that are not letters or numbers
    // and puts the string into lowercase
    const newStr: string = s.replace(/[^a-z0-9]/gi, '').toLowerCase()

    // reverse the new string by:
    // 1. turning the string into an array of letters
    // 2. reversing the array
    // 3. converting the array back into a string
    const reverseStr: string = newStr.split('').reverse().join('')

    // if the reversed string matches newStr return true
    // else return false
    return newStr === reverseStr ? true : false
};

// this however is a two pointer algorithm problem
// so i've gone ahead and written a second solution that should perform faster
// on strings that are not palindromes

function isPalindromeTwo(s: string): boolean {
    // initially does the same as my first solution
    const newStr: string = s.replace(/[^a-z0-9]/gi, '').toLowerCase()

		// initialize the two pointers
    let left: number = 0
    let right: number = newStr.length - 1

    for (let i = 0; i < newStr.length; i++) {
				// as long as the given letters on either end of the string match
				// it will continue to decrement and increment the pointers until
				// it returns true
        if (newStr[left] === newStr[right]) {
            left++
            right--
				// otherwise it will return false the moment two letters do not match
        } else {
            return false
        }
    }

    return true
};