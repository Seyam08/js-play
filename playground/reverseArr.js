const reverseArray = (inpArr) => {
    const returnArry = [];
    const leng = inpArr.length;
    for (let i = leng - 1; i >= 0; i -= 1) {
        returnArry.push(inpArr[i]);
    }
    return returnArry;
};

const arr = [12, 35, 64, 21];

const result = reverseArray(arr);

console.log(result);
console.log(arr);
