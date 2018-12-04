## Curse of Strahd Encounter Generator

This web app generates a random encounter for the [Dungeons & Dragons _Curse of Strahd_ campaign](http://dnd.wizards.com/products/tabletop-games/rpg-products/curse-strahd). Each encounter is pulled
from page 29 of that book, and takes into account whether "Day" or "Night" is the selected time of day.

## Scripts

```bash
$ yarn start # start the dev server
$ yarn test # start tests in watch mode
$ yarn build # build the app for deployment
```

## Libraries

The app is built in Typescript, and is using some libraries I wanted to test out:

- [Compromise](https://compromise.cool) - a javascript natural language package for handling pluralization.
- [Reakit](https://reakit.io) - a component library for React
- [Ramda](https://ramdajs.com) - my go-to functional helper library

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
