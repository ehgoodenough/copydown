const markdown = `
# <project.name> #

## Numbers ##

<ForeachList({"list": project.numbers, "template": exclaimify})>

## Credits ##

<project.credits>
`

const data = {
    "project": {
        "name": "Hero Tactics",
        "numbers": [123456789, 987654321],
        "credits": "By Andrew Goodenough\nAnd also Andrew Goodenough",
    },
    "exclaimify": function(value) {
        return value + "!!"
    },
}

const copydown = `
# Hero Tactics #

## Numbers ##

123456789!!
987654321!!

## Credits ##

By Andrew Goodenough
And also Andrew Goodenough
`

const Chai = require("chai")
const Copydown = require("./index.js")
Chai.expect(Copydown(markdown, data)).to.equal(copydown)
