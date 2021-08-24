function Robot(name) {
  this.name = name;
  }

function add (op1, op2) {
  this.name = this.name || 'Human';
  return this.name + ' can count to ' + (op1 + op2);
}

const voltron = new Robot('Voltron');
const human = new Robot('')

const noName = add.bind(human)
const robotName = add.bind(voltron)

console.log(noName(0,1))
console.log(robotName(1,2))
console.log(robotName(20,30))