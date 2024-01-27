
// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     greet: function() {
//       console.log('Hello, ' + this.firstName + ' ' + this.lastName);
//     }
//   };

// person.greet();

className Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.obj = {

            firstName: this.firstName,
            lastName: this.lastName,
            greet: function() {
              console.log('Hello, ' + this.firstName + ' ' + this.lastName);
            }
          };
    }

    greet() {
        console.log('Bonjur, ' + this.firstName + ' ' + this.lastName);
    }
}

function Person2(firstName, lastName) {
    this.firstName = firstName;
}

Person2.prototype.gret = function() {
    console.log('Wech, ' + this.firstName);
}

const person = new Person('Reda', 'Jaanit');
const person2 = new Person2('Reda');


console.log((person2 instanceof  Person2));
