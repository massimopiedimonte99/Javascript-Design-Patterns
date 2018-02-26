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