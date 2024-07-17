function firstNonRepeatedChar(str) {
    const charCount = {};

    // Count the occurrences of each character
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Find the first character that occurs only once
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    // If no non-repeated character is found, return null
    return null;
}
