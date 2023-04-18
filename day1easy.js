/**
 * Given a string of round, curly, and square open and closing brackets, 
 * return whether the brackets are balanced (well-formed).
 * For example, given the string "([])[]({})", you should return true.
 * Given the string "([)]" or "((()", you should return false.
 * 
 * https://www.geeksforgeeks.org/check-for-balanced-parentheses-in-an-expression/
 */

/**
 * Using Stack
 * @param {*} string 
 * @returns 
 */
function isBalancedStack(input){
    const stack = []

    for (let index = 0; index < input.length; index++) {
        const char = input[index]
        if (['[','{','('].includes(char)) stack.push(char)
        if (['}','}',')'].includes(char)) stack.pop()
    }
    return stack.length == 0
}

/**
 * Without Using Stack
 * @param {*} string 
 * @returns 
 */
function isBalanced(input){
    let isStringBalanced = 0
    for (let index = 0; index < input.length; index++) {
        const char = input[index]
        if (['[','{','('].includes(char)) isStringBalanced ++
        if (['}','}',')'].includes(char)) isStringBalanced --
    }
    return isStringBalanced == 0
}
