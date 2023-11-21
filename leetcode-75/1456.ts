function maxVowels(s: string, k: number): number {
    let string: string[] = []
    let vowels: string[] = ["a", "e", "i", "o", "u"]

    let mostVowels: number = 0
    let vowelsPerString: number = 0

    for (let i = 0; i < s.length; i++) {
        let answer = ""
        for (let j = i; j < s.length; j++) {
            answer += s[j]
            if (answer.length === k) {
                string.push(answer)
                break
            }
        }
    }

    for (let i = 0; i < string.length; i++) {
        for (let letter of string[i]) {
            if (vowels.includes(letter)) {
                vowelsPerString += 1
            }
        }
        if (vowelsPerString > mostVowels) {
            mostVowels = vowelsPerString
        }
        vowelsPerString = 0
    }

    return mostVowels
};