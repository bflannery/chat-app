[{
  id:'da0s9gj1l3jklda',
  name: 'Brian',
  room: 'The Office Fans'
}]

class Users {
  constructor () {
    this.users = [];
  }

  addUser (id, name, room) {
    var user = { id, name, room };
    this.users.push(user)
    return user;
  }
}

// class Person {
//   constructor (name, age) {
//     this.name = name;
//     this.age = age;
//   }
//
//   getUserDescription () {
//     return `${this.name} is ${this.age} years old`;
//   }
//
// }
//
// var me = new Person('Brian', 31);
// var description = me.getUserDescription();
// console.log({description});

module.exports = { Users }
