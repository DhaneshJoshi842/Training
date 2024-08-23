function ispresent(n) {
    for (let i = 1; i <= 10; i++) {
        if (i == n) { return true; }
    }
    return false;
}
console.log(ispresent(16));