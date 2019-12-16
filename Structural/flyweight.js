class Car {
    constructor(model, price) {
        this.model = model;
        this.price = price;
    }
}

class CarFactory {
    constructor() {
        this.cars = [];
    }

    create(model, price) {
        const candidate = this.getCar(model);

        if (candidate) {
            return candidate;
        }

        const newCar = new Car(model, price);
        this.cars = [...this.cars, newCar];
        return newCar;
    }

    getCar(model) {
        return this.cars.find(car => car.model === model)
    }
};

const factory = new CarFactory();

const bmwX6 = factory.create('bmw', 13000);
const audi = factory.create('audi', 15000);
const bmwX3 = factory.create('bmw', 300);

console.log('====================================');
console.log(bmwX6);
console.log(audi);
console.log(bmwX3);
console.log('====================================');