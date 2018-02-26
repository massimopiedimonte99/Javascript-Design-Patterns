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