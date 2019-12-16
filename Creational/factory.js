class SimpleMembership {
    constructor(name) {
        this.name = name;
        this.cost = 50;
    }
}

class StandardMembership {
  constructor(name) {
    this.name = name;
    this.cost = 1550;
  }
}

class PremiumMembership {
  constructor(name) {
    this.name = name;
    this.cost = 500;
  }
}

class MemberFactory {
    static list = {
        simple: SimpleMembership,
        standard: StandardMembership,
        premium: PremiumMembership,
    }
  
  create(name, type = 'simple') {
    const defaultMembership = MemberFactory.list.simple;
    const Membership = MemberFactory.list[type] || defaultMembership;
    const member = new Membership(name);
    member.type = type;
    member.define = function () {
      console.log(`${this.name} (${this.type}): ${this.cost}`);
    }.bind(member);

    return member;
  }
}

const factory = new MemberFactory();
const members = [
  factory.create('Vladilen', 'simple'),
  factory.create('Elena', 'standard'),
  factory.create('Rina', 'premium'),
  factory.create('Petr'),
];

members.forEach(({ define }) => define())