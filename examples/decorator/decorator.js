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