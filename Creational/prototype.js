const car = {
    wheels: 4,

    init() {
        console.log('====================================');
        console.log(`I have ${this.wheels} wheels and my owner is ${this.owner}`);
        console.log('====================================');
    }
};

const carWithOwner = Object.create(car, {
    owner: {
        value: 'Thomas'
    }
});

console.log('====================================');
console.log(carWithOwner.__proto__ === car);
console.log('====================================');

carWithOwner.init();