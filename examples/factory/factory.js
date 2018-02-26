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