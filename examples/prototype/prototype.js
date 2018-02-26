function PersonPrototype(proto) {
    this.proto = proto
}

PersonPrototype.prototype.clone = function() {
    var customer = new Person()
    customer.name = this.proto.name
    customer.surname = this.proto.surname
    customer.age = this.proto.age
    return customer
}

function Person(name, surname, age) {
    this.name = name
    this.surname = surname
    this.age = age
}

Person.prototype.sayHello = function() {
    console.log("Hello, it's me... " + this.name + "!")
}

/** Create the "person" object and pass it to the "PersonPrototype" constructor */
var person = new Person("Bob", "McPizza", 21)
var person_proto = new PersonPrototype(person)

/** Create different objects by using the "clone()" function */
var bob_one = person_proto.clone()
var bob_two = person_proto.clone()
var bob_three = person_proto.clone()

/** Tests */
console.log(bob_one.name)
console.log(bob_two.name)
console.log(bob_three.name)