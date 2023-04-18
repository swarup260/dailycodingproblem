/**
 * Run-length encoding is a fast and simple method of encoding strings. 
 * The basic idea is to represent repeated successive characters as a single count and character. 
 * For example, the string "AAAABBBCCDAA" would be encoded as "4A3B2C1D2A".
 * Implement run-length encoding and decoding. 
 * You can assume the string to be encoded have no digits and consists
 * solely of alphabetic characters. You can assume the string to be decoded is valid.
 * https://www.geeksforgeeks.org/run-length-encoding/#discuss
 * https://en.wikipedia.org/wiki/Run-length_encoding
 */

function runLengthEncoding(input) {
    let currentElement = []
    let encodingString = ''

    for (let index = 0; index <= input.length; index++) {
        const char = input[index]
        const charLen = currentElement.length
        if (charLen > 0 && char != currentElement[charLen - 1]) {
            encodingString += `${charLen}${currentElement[0]}`
            currentElement = [] // reset the counter and element
        }
        currentElement.push(char)
    }
    
    return encodingString
}


function runLengthDecoding(input) {
    let decodingString = ''

    for (let index = 0; index < input.length; index += 2) {
        const charLen = input[index]
        const char = input[index + 1]
        for (let index = 0; index < charLen; index++) {
            decodingString += `${char}`
        }

    }

    return decodingString
}
// EXAMPLE
// const str = "AAAABBBCCDAAGGGHHHRRTTYQJJUUQPGTY"
// const encodingString = runLengthEncoding(str)
// const decodingString = runLengthDecoding(encodingString)
// console.log({ encodingString, decodingString }, str == decodingString)

