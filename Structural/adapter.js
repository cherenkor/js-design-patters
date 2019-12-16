class OldCalc {
  operations(t1, t2, operation) {
    switch (operation) {
      case "add":
        return t1 + t2;
      case "sub":
        return t1 - t2;
      default:
        return NaN;
    }
  }
};

class NewCalc {
    add(t1, t2) {
        return t1 + t2;
    }

    sub(t1, t2) {
        return t1 - t2;
    }
}

class CalcAdapter {
  constructor() {
    this.calc = new NewCalc();
  }

  operations(t1, t2, operation) {
    switch (operation) {
      case "add":
        return this.calc.add(t1, t2);
      case "sub":
        return this.calc.sub(t1, t2);
      default:
        return NaN;
    }
  }
};

const oldCalc = new OldCalc();
const newCalc = new NewCalc();
const calcAdapter = new CalcAdapter();

console.log('====================================');
console.log(oldCalc.operations(2, 3, 'add'));
console.log('====================================');

console.log('====================================');
console.log(newCalc.add(2, 3));
console.log('====================================');

console.log('====================================');
console.log(calcAdapter.operations(2, 3, 'add'));
console.log('====================================');
