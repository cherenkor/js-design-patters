class MyIterator {
    constructor(data) {
        this.index = 0;
        this.data = data;
    }

    [Symbol.iterator]() {
        return {
            next: () => {
                if (this.index < this.data.length) {
                    return {
                        value: this.data[this.index++],
                        done: false,
                    }
                } else {
                    this.index = 0;
                    return {
                        done: true,
                        value: void 0
                    }
                }
            }
        }
    }
};

function* generator(collection) {
    let index = 0;

    while (index < collection.length) {
        yield collection[index++];
    }
}

const iterator = new MyIterator(['This', 'is', 'iterator']);
const gen = generator(['This', 'is', 'iterator', ', still']);
const manGen = generator(["This", "is", "iterator", ", still"]);

// Iterator
console.log("====================================");
for (const val of iterator) {
  console.log(`Value: ${val}`);
}
console.log("====================================");

// Generator
console.log('====================================');
for (const val of gen) {
    console.log(`Value: ${val}`);
}
console.log('====================================');

// Manually invoke generator
console.log('====================================');
console.log(manGen.next().value); // This
console.log(manGen.next().value); // is
console.log(manGen.next().value); // iterator
console.log(manGen.next().value); // , still
console.log(manGen.next().value); // undefined
console.log('====================================');