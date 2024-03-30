const inp = 'tattrrattat';

const palindrome = (str) => {
    if (typeof str === 'string') {
        const reversedStr = str.split('').reverse().join('');
        if (str === reversedStr) {
            return `${str} is a palindrome word`;
        }
        throw new Error(`${str} is not a palindrome word`);
    }
    throw new Error(`${str} is not a string`);
};
const result = palindrome(inp);
console.log(result);
