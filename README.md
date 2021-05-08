# Help19

Resources to help and fight Covid-19. Website is at [Help19.in](https://help19.in)

## Installation guide

This project is based on [Gridsome](https://gridsome.org) which is powered by VueJS.

- Clone the repo.
- Install the dependencies. ```npm install```
- Run the project locally. ```npm run develop```

## Contribution guide

### Via merge of pull request

Make your changes and do a merge or pull request.

### Add data to existing city

If you want to add data to an existing city, go to *content > cities* directory and find the **cityname.md** file. Make necessary contributions there.

### Adding a new city

If you want to add a new city, create a new markdown file inside *content > cities* directory. The front matter should be as below. You can copy-paste from existing files.

```markdown
---
name: "Hyderabad"
updatedOn: "2021-02-11"
---
```

The *updatedOn* format is *year-month-date*.

## Issues

For any ideas, suggestions and improvements, create a new issue on this repository.
