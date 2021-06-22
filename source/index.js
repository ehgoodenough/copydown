import evalsafe from "safe-eval"

let markdown = `
# <animation.name> <DownloadButton(123)> #

## Credits ##

<animation.credits>

## Weapons ##

<ForeachList({"list": animation.weapons, "template": DownloadButton})>
`

const context = {
    "animation": {
        "name": "Fighter",
        "credits": "By Andrew Goodenough\nAnd also Andrew Goodenough",
        "weapons": [
            "111",
            "222",
            "333"
        ],
    },
    "DownloadButton": function(value) {
        return value * 2
    },
    "ForeachList": function({list, template}) {
        if(template != undefined) {
            list = list.map((value) => template(value))
        }
        return list.join("\n")
    }
}

console.log(AndrewFlavorMarkdown({markdown, context}))

function AndrewFlavorMarkdown({markdown, context}) {
    markdown = markdown.trim()
    markdown = markdown.split("\n")

    markdown = markdown.map((text) => {
        const matches = text.match(/<[^>]*>/g)

        if(matches != null) {
            matches.forEach((match) => {
                let func = match.substring(1, match.length - 1)
                let rematch = evalsafe(func, context) ?? ""
                text = text.replace(match, rematch)
            })
        }

        return text
    })

    markdown = markdown.join("\n")
    return markdown
}

// TODO:
// - render as html?
// - save context as json?
// - more helpers: ForeachGrid
// - import markdownplease from file!! save to markdown to new file.
// - writing a system to mapping output readmes to views/models.
