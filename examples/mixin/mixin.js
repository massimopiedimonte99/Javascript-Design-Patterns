function Person(name)     { this.name = name }

function Mixin() {}

Mixin.prototype.print_info = function() { return this.name }

/** Use this function to easily extend from your super-classes */
function extend(subClass, superClass) {
    if(arguments[2]) {
        for(var i = 0; i < arguments.length; i++) {
            subClass.prototype[arguments[i]] = superClass.prototype[arguments[i]]
        }
    }
}

/** Get the "print_info()" method for the Person constructor */
extend(Person, Mixin, "print_info")

var bob = new Person("Bob")

/** Tests */
console.log(bob.print_info())