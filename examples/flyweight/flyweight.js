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