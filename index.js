import evalsafe from "safe-eval"
import * as objdict from "objdict"

const DEFAULT_DATA = {
    "ForeachList": function({list, template}) {
        if(template != undefined) {
            list = list.map((value) => template(value))
        }
        return list.join("\n")
    }
}


export default function(markdown, data) {
    data = data || {}
    data = objdict.merge(DEFAULT_DATA, data)

    // markdown = markdown.trim()
    markdown = markdown.split("\n")

    markdown = markdown.map((text) => {
        const matches = text.match(/<[^>]*>/g)

        if(matches != null) {
            matches.forEach((match) => {
                let func = match.substring(1, match.length - 1)
                let rematch = evalsafe(func, data) ?? ""
                text = text.replace(match, rematch)
            })
        }

        return text
    })

    markdown = markdown.join("\n")
    return markdown
}
