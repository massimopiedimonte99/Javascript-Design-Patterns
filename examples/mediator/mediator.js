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