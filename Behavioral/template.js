class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    getResponsibilities() {

    }

    work() {
        return `${this.name} is doing ${this.getResponsibilities()}`
    }

    getPaid() {
        return `${this.name} has a salary - ${this.salary}`;
    }
}

class Developer extends Employee {
    constructor(name, salary) {
        super(name, salary)
    }

    getResponsibilities() {
        return 'Create programs';
    }
}

class Tester extends Employee {
    constructor(name, salary) {
        super(name, salary)
    }

    getResponsibilities() {
        return 'Test programs';
    }
}

const dev = new Developer('Sergey', 1000000);
const tester = new Tester('Igor', 9999999);

console.log('====================================');
console.log(dev.getPaid());
console.log(dev.work());
console.log('====================================');

console.log('====================================');
console.log(tester.getPaid());
console.log(tester.work());
console.log('====================================');