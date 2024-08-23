function RandomSum(size) {

    let arr = [];
    let sum = 0;
    for (let i = 0; i < size; i++) {
        arr[i] = Math.floor(Math.random() * 10);
        console.log(arr[i] + " ");
        sum = sum + arr[i];
    }
    return sum;
}

console.log(RandomSum(5));