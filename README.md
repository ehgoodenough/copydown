# Copydown #

A template engine for dynamically-generated markdown.

For example, if you took this template:

```
# <project.name> #

<project.description>

## Tags ##

<ForeachList({"list": project.tags, "template": bulletify})>

## Credits ##

<project.credits>
```

And fed it this data:

```
{
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
```

You'd generate this markdown:

```
# Hero Tactics #

An oldschool tactics rpg.

## Tags ##

- Turn-based
- Tile-based
- Undo-able

## Credits ##

By Andrew Goodenough
And also Andrew Goodenough
```
