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