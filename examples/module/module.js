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