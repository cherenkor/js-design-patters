class Complains {
    constructor() {
        this.complains = [];
    }
    
    reply(complain) {

    }

    add(complain) {
        this.complains = [...this.complains, complain];
        return this.reply(complain)
    }
};

class ProductComplains extends Complains {
    reply({ id, customer, details }) {
        return `Product: ${id}: ${customer} ${details}`;
    }
}

class ServiceComplains extends Complains {
  reply({ id, customer, details }) {
    return `Service: ${id}: ${customer} ${details}`;
  }
}

class ComplainRegistry {
    register(customer, type, details) {
        const id = Date.now()
        let complain;

        if (type === 'service') {
            complain = new ServiceComplains();
        } else {
            complain = new ProductComplains();
        }

        return complain.add({ id, customer, details });
    }
}

const registry = new ComplainRegistry();

console.log('====================================');
console.log(registry.register('Tanya', 'service', 'Unavailable'));
console.log(registry.register('Lena', 'product', 'Server Error'));
console.log('====================================');