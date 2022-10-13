# Copydown #

A template engine for dynamically-generated markdown.

For example, if you took this template:

```
# <project.name> #

## Numbers ##

<ForeachList({"list": project.numbers, "template": exclaimify})>

## Credits ##

<project.credits>
```

And fed it this data:

```
{
    "project": {
        "name": "Hero Tactics",
        "numbers": [123456789, 987654321],
        "credits": "By Andrew Goodenough\nAnd also Andrew Goodenough",
    },
    "exclaimify": function(value) {
        return value + "!!"
    },
}
```

You'd generate this markdown:

```
# Hero Tactics #

## Numbers ##

123456789!!
987654321!!

## Credits ##

By Andrew Goodenough
And also Andrew Goodenough
```
