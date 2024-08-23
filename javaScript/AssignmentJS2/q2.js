function Sign(n) {
    if (n > 0) {
        return "positive";
    }
    else if (n < 0) {
        return "Negative";
    }
    else {
        return "Zero";
    }
}
console.log(Sign(4));
console.log(Sign(0));
console.log(Sign(-1));