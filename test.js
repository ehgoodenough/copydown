const markdown = `
# <animation.name> <Double(123)> #

## Credits ##

<animation.credits>

## Weapons ##

<ForeachList({"list": animation.weapons, "template": Double})>
`

const data = {
    "animation": {
        "name": "Fighter",
        "credits": "By Andrew Goodenough\nAnd also Andrew Goodenough",
        "weapons": [
            "111",
            "222",
            "333"
        ],
    },
    "Double": function(value) {
        return value * 2
    },
}

const copydown = `
# Fighter 246 #

## Credits ##

By Andrew Goodenough
And also Andrew Goodenough

## Weapons ##

222
444
666
`

const Chai = require("chai")
const Copydown = require("./index.js")
Chai.expect(Copydown(markdown, data)).to.equal(copydown)
