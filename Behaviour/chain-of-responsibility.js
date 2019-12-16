class MySum {
    constructor(initialValue = 30) {
        this.sum = initialValue;
    }

    add(value) {
        this.sum += value;
        return this;
    }
}

const sum1 = new MySum();

console.log('====================================');
console.log(sum1.add(8).add(10).add(2).sum);
console.log('====================================');