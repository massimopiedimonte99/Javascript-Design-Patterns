// Here the constructor
function Person(name, age, city) {
    this.name = name
    this.age = age
    this.city = city
}

// Here i'm going to declare externally this method because i want to create a single instance of the showInfo() method
Person.prototype.showInfo = function() {
    return "Name: " + this.name + " Age: " + this.age + " in: " + this.city
}

/** showInfo() will be now called one time, then it will be shared across all the objects */

/** Test */
var myObj = new Person("Bob", 19, "NY")
console.log(myObj.showInfo())

var myObj2 = new Person("Tim", 21, "NY")
console.log(myObj2.showInfo())

var myObj2 = new Person("Zak", 17, "NY")
console.log(myObj2.showInfo())