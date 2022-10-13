const markdown = `
# <project.name> #

<project.description>

## Tags ##

<ForeachList({"list": project.tags, "template": bulletify})>

## Credits ##

<project.credits>
`

const data = {
    "project": {
        "name": "Hero Tactics",
        "description": "An oldschool tactics rpg.",
        "tags": ["Turn-based", "Tile-based", "Undo-able"],
        "credits": "By Andrew Goodenough\nAnd also Andrew Goodenough",
    },
    "bulletify": function(value) {
        return "- " + value
    },
}

const copydown = `
# Hero Tactics #

An oldschool tactics rpg.

## Tags ##

- Turn-based
- Tile-based
- Undo-able

## Credits ##

By Andrew Goodenough
And also Andrew Goodenough
`

const Chai = require("chai")
const Copydown = require("./index.js")
Chai.expect(Copydown(markdown, data)).to.equal(copydown)
