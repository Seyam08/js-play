const arr = [124, 346, 346, 56, 12];
let largeNum = arr[0];
// eslint-disable-next-line no-restricted-syntax, no-undef
for (const item of arr) {
    if (item > largeNum) {
        largeNum = item;
    }
}
console.log(largeNum);

// another method
const arr2 = [124, 5476, 56, 12];
const max = Math.max(...arr2);
console.log(max);

// another
const arr3 = [35, 56, 23, 53];
const max2 = arr3.reduce((acc, cur) => {
    if (acc > cur) {
        return acc;
    }
    return cur;
});
console.log(max2);
// -------large value of a object
const obj = {
    one: 16,
    two: 22,
    three: 53,
    four: 40,
};
const objToArray = Object.values(obj);
let largeVal = objToArray[0];
// eslint-disable-next-line no-restricted-syntax, no-undef, guard-for-in
for (const item of objToArray) {
    if (item > largeVal) {
        largeVal = item;
    }
}
console.log(largeVal);
