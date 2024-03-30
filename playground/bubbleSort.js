/* eslint-disable no-param-reassign */
const bubbleSort = (argArr) => {
    const arr = [...argArr];
    let n;
    let i;
    let isSwaped = false;
    const len = arr.length;
    for (n = 0; n < len; n += 1) {
        isSwaped = false;
        for (i = 0; i < len - n - 1; i += 1) {
            if (arr[i] > arr[i + 1]) {
                const temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                isSwaped = true;
                console.log(`ifloop ${i}`);
            }
            console.log(`inner for ${i}`);
        }
        console.log(`outer loop ${i}`);
        if (!isSwaped) {
            break;
        }
    }
    return arr;
};

const arr = [1, 5, 3, 4, 2];

const newArr = bubbleSort(arr);

console.log(newArr);
