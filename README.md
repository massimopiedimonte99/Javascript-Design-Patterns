# Design Patterns by Example

You can find the HTML version here: https://codepen.io/massimo99/pen/jZraWP

## DISCLAIMER

This code is not intended to be a complete guide to Design Patterns, however it contains simplified examples that you can use to get more beginner-friendly examples than what you find elsewhere.

I'm not a Design Pattern expert and i don't want to be one, if you notice some errors (grammar, semantic, implementation, etc) please leave a comment and let me figure out the issue so i can solve it, you will be credited for your contribution.

All of the patterns illustrated here are covered in the book "Javascript Design Patterns" by Addy Osmani, you can read this book for free: https://goo.gl/xxrHrS or you can buy the non-digital version: https://goo.gl/D7GfgY

## The Singleton Pattern

The Singleton pattern allows you to create a single instance of a specified class, since Javascript has no classes, a normal "literal object" can be considered a singleton, however... it might happen that you need to create an object later on the program, the Singleton comes in help in this case. It is worth to say that the Singleton is considered an "Anti-Pattern" by most of the Javascript developers. <br><br><a href="https://stackoverflow.com/questions/137975/what-is-so-bad-about-singletons"> More informations </a>

```javascript
var singleton = (function(){

var instance

function create_object() {
    return {
        name: "Bob",
        address: "21th Road, NY",
        animal: "Dog",
        print_info: function() {
            return this.name + " lives in " + this.address + " with his " + this.animal
        }
    }
}

return {
    get_instance: function() {
        if(!instance) instance = create_object()
        return instance
    }
}

})();

console.log(singleton.get_instance().print_info())
```

## The Module Pattern

The Module Pattern makes use of the closure to return an object. The main goal of this pattern is to separate methods in "private/public" by emulating the "information hiding.

```javascript
var basket_module = (function(){

    // Private array and two private methods for test purposes

    var basket = []

    function private_method_one() {}
    function private_function_two() {}

    return {
        
        add_item: function(val) {
            basket.push(val)
        },
        
        get_total_items: function() {
            return basket.length
        },

        get_total_price: function() {
            var total_items = this.get_total_items()
            var total_price = 0
            while(total_items--) total_price = total_price + basket[total_items].price
            return total_price
        },

        // Get access to the private method

        public_method: private_method_one 

    }

})()

basket_module.add_item({
    item_one: "bob",
    item_two: "eoe",
    price: 12
})

basket_module.add_item({
    item_one: "3o3",
    item_two: "2o2",
    price: 17
})

console.log(basket_module.get_total_items())
console.log(basket_module.get_total_price())
```

## The Command Pattern

The Command pattern aims to encapsulate method invocation, requests, or operations into a single object and gives us the ability to both parameterize and pass method calls around that can be executed at our discretion.<br><br>Definition by: <a href="https://www.safaribooksonline.com/library/view/learning-javascript-design/9781449334840/">Addy Osmani</a>

```javascript
var series = {
    print_type: function(title, type) {
        console.log("The type of: " + title + " is: " + type)
    },
    print_dur: function(title, dur) {
        console.log("Each episode of: " + title + " is " + dur + " long")
    },
    print_title: function(title) {
        console.log("The title of this program is: " + title)
    }
}

/** Execute the function passed as first argument and take all of the other arguments as arguments of this function */
series.execute = function(function_name) {
    return series[function_name].apply(series, [].slice.call(arguments, 1))
}

/** Tests */
series.execute("print_title", "Tokyo Ghoul")
series.execute("print_dur", "Sakurasou no Pet na Kanojo", "24min")
series.execute("print_type", "Welcome to the N.H.K", "anime/dramatic")
```

## The Revealing Module Pattern

The Revealing Module Pattern is pretty similar to the classic Module Pattern but with few important changes, all variable and functions are declared as public and this pattern should return only the properties that we want as public.

```javascript
var sport = (function(){

    var football_team = 11
    var basket_team = 5

    function remove_player(team, valore) {
        if(team == "calcio") football_team -= valore
        if(team == "basket") basket_team -= valore
        success()
    }

    function show_team(team) {
        if(team == "calcio") return football_team
        if(team == "basket") return basket_team
    }

    function success() {
        console.log("Players removed successfully");
        console.log(show_team('football'))
    }

    return {
        remove_player: remove_player,
        show_team: show_team,
    }

})()

console.log(sport.show_team('calcio'))
sport.remove_player('calcio', 3)
sport.remove_player('calcio', 5)
```

## The Mixin Pattern

The Mixin Pattern provides functionality that can be easily extended by other sub-classes

```javascript
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
```

## The Creational Pattern

The Creational Patterns forms the basis for a number of the other design patterns. It deals with the idea of creating new things, specifically new objects.

```javascript
/***** (1) Create an object - 3 ways ****/

/** 1.0 **/

var myObject = {}

/** 1.1 **/

var myObject = new Object()

/** 1.2 **/

var myObject = Object.create(null)

/***** (2) Define Properties - 4 ways ****/

/** 1.3 **/

myObject.animal = "dog"

/** 1.4 **/

myObject["animal"] = "dog"

/** 1.5 **/

Object.defineProperty(myObject, 'animal', {
    value: "dog",
    writable: true
})

/** 1.6 **/

Object.defineProperties(myObject, {
    "animal": {
        value: "dog",
        writable: true
    },
    "zoo": {
        value: true,
        writable: false,
        enumerable: false,
        configurable: false
    }
})

/** Test */

console.log(myObject)
```

## The Prototype Pattern

The Prototype Pattern is not so popular in programming languages different from Javascript, however it\'s a clean solution to easily clone an object by accessing to the prototype of the objects we are working with.

```javascript
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
```

## The Constructor Pattern

Constructors are widely used to create easily few instances without have to rewrite them. will be called each time you create an instance. What a Constructor Pattern does, is to create However, most of the time, they are badly written since the methods inside a constructor a single istance that will be shared between all of our objects.

```javascript
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

/******

--- Closures ---

(function(){
    this.showInfo = function() {
        return "Name: " + this.name + " Age: " + this.age + " in: " + this.city
    }
}).call(Person.prototype);

******/
```

## The Decorator Pattern

The Decorator Pattern is useful for modifying existing systems where you may wish to add additional features to objects without the need to change the underlying code that uses them.

```javascript
function Product() {}

Product.prototype.price = function() { return 24 }
Product.prototype.quantity = function() { return 5 }

function increasePriceBy(number, object) {
    var priceValue = object.price()
    object.price = function() { return priceValue + number }
}

var computer = new Product()

increasePriceBy(40, computer)

console.log(computer.price()) // Is changed
console.log(computer.quantity()) // Is not changed
```

## The Facade Pattern

The Facade Patterns provides a simple interface by hiding the complexity "behind the scenes

```javascript
function CreateShape(width, height = null) {
    this.width = width
    this.height = height
}

function CalculateArea() {}

CalculateArea.prototype.SquareArea = function(side) {
    return side * side
}

CalculateArea.prototype.RectArea = function(width, height) {
    return width * height
}

function squareArea(side) {
    var quadrato = new CreateShape(side)
    var area = new CalculateArea()
    return area.SquareArea(quadrato.width)
}

function rectArea(width, height) {
    var rettangolo = new CreateShape(width, height)
    var area = new CalculateArea()
    return area.RectArea(width, height)
}

/** Tests */
console.log(squareArea(4))
console.log(rectArea(5, 4))
console.log(squareArea(7, 6, 3, "dog", 7, 1))
```

## The Flyweight Pattern

The Flyweight Pattern allows you to encapsulate and re-use a single portion of code to improve performances of your application and avoid redundancy

```javascript
function Flyweight(type, company) {
    this.type = type
    this.company = company
}

var FlyweightFactory = (function(){
    var flyweights = {}
    return {
        useFlyweight: function(type, company) {
            if(!flyweights[type + company]) {
                flyweights[type + company] = new Flyweight(type, company)
            }
            return flyweights[type + company]
        },
        countFlyweight: function() {
            var count_flyweights = 0
            for(var index in flyweights) count_flyweights++
            return "Flyweights: " + count_flyweights
        }
    }
})()

var Products = function(type, company, state, time) {
    this.flyweight = FlyweightFactory.useFlyweight(type, company)
    this.state = state
    this.time = time
}

function ProductsManager() {
    this.products = []
    this.total_products = 0
}

ProductsManager.prototype = {
    addProduct: function(type, company, state, time) {
        this.products.push(new Products(type, company, state, time))
        this.total_products++
    },
    countProducts: function(){ return "Products: " + this.total_products }
}

var products = new ProductsManager()

products.addProduct("DVD", "Dynit", "Good", 3)
products.addProduct("DVD", "Dynit", "Excellent", 5)
products.addProduct("DVD", "Dynit", "Good", 2)
products.addProduct("Manga", "Dynit", "Not good", 3)
products.addProduct("Manga", "Crunchyroll", "Excellent", 7)

/** Tests */
console.log(products.countProducts())
console.log(FlyweightFactory.countFlyweight())
```

## The Mediator Pattern

The Mediator Pattern acts like a mediator between our objects, it helps one or more of them to communicate each other in a cleaner and more organized way.

```javascript
function Friend(name, surname, age) {
    this.name = name
    this.mediator_reference = null
}

Friend.prototype.create_friendship = function(friend) {
    this.mediator_reference.create_friendship(this, friend, "!!! - Friends - !!!")
}

function Mediator() {
    this.friends = []
}

Mediator.prototype = {
    register: function(friend) {
        this.friends.push(friend)
        friend.mediator_reference = this
    },
    create_friendship: function(friend_one, friend_two, message) {
        for(let i = 0; i < this.friends.length; i++) {
            if(this.friends[i].name == friend_two.name) {
                console.log(friend_one.name + " is friend of: " + friend_two.name + ". " + message)
            }
        }
    }
}

/** Tests */

var bob = new Friend('Bob')
var tim = new Friend('Tim')
var john = new Friend('John')

var mediator = new Mediator()

mediator.register(bob)
mediator.register(tim)
mediator.register(john)

bob.create_friendship(tim)
bob.create_friendship(john)
tim.create_friendship(john)
john.create_friendship(bob)
john.create_friendship(tim)
```

## The Factory Pattern

The Factory Pattern is a creational pattern used to create multiple objects based on conditions by implementing an interface (method) as factory, in other programming languages the Factory Pattern can be also more useful and complex than that

```javascript
function Ukaku(opts) {
    this.skill = opts.skill
    this.ghoul = opts.ghoul
}

function Koukaku(opts) {
    this.skill = opts.skill
    this.ghoul = opts.ghoul
}

function Rinkaku(opts) {
    this.skill = opts.skill
    this.ghoul = opts.ghoul
}

function Bikaku(opts) {
    this.skill = opts.skill
    this.ghoul = opts.ghoul
}

function Kagune(){}

Kagune.prototype.createKagune = function(opts) {
    switch(opts.type) {
        case 'ukaku':
            this.classKagune = Ukaku
            break
        case 'koukaku':
            this.classKagune = Koukaku
            break
        case 'rinkaku':
            this.classKagune = Rinkaku
            break
        case 'Bikaku':
            this.classKagune = Bikaku
            break
    }
    return new this.classKagune(opts)
}

var kaguneFactory = new Kagune()
var rinkaku = kaguneFactory.createKagune({ type: 'rinkaku', skill: 'Resistence', ghoul: 'Kaneki' })

console.log(rinkaku instanceof Rinkaku)
console.log(rinkaku.skill)
console.log(rinkaku.ghoul)
```

## Authors

**Massimo Piedimonte** created Design Patterns by Example

## Credits

[Font Awesome](http://fontawesome.io) for the menu icon, 
[Google Font](https://fonts.google.com/) for "Raleway",
[DoFactory](www.dofactory.com) and the other linked sources for the UML diagrams,
[Addy Osmani](https://github.com/addyosmani) for his book available to all for free,
[Ibrahim Diallo](https://idiallo.com) to provide an awesome Syntax Highlighter,
[Mozilla](https://www.mozilla.org/it/) and [StackOverflow](https://stackoverflow.com/) for their tutorials/explanations
[Quandrius Jelthasar](https://www.sololearn.com/Profile/4063933/Swift) to correct grammar errors

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/piedimonte/Design-Patterns-by-Example/blob/master/LICENSE) file for details
