import { pipe, sum, times } from "ramda";

import { Encounter, NLPPlugin } from "./types";
import { dieTest, dieResult } from "./dice-utils";

export const aFor1 = (str: string) => str.replace(/^1\ /, "a ");

export const calculatedCounts = (dieSpec: string) => {
  const parsed = dieTest.exec(dieSpec);
  if (parsed === null) {
    return `${0}`;
  }

  const numDice = Boolean(parsed[1]) ? parseInt(parsed[1], 0) : 1;
  const sides = parseInt(parsed[2], 0);
  const modifier = Boolean(parsed[3]) ? parseInt(parsed[3], 0) : 0;
  const total = pipe(
    times(dieResult(sides)),
    sum
  )(numDice);

  return `${total + modifier}`;
};

export const calculateEncounter = (plugin?: NLPPlugin) => (
  encFactory: (args?: any) => Encounter
): Encounter => {
  const nlp = require("compromise");
  if (plugin) {
    nlp.plugin(plugin);
  }

  const { encounter, description } = encFactory();
  const calcedStr = encounter.toLowerCase().replace(dieTest, calculatedCounts);
  const countStr = calcedStr.match(/\d+(?!.*\d)/);

  const count = countStr !== null ? parseInt(countStr[0], 0) : 1;

  /* Compromise does some weird mutations, so we have to handle
   * things like this in order to have it spit out the string like we
   * expect.
   * See https://stackoverflow.com/questions/53597270/pluralize-singularize-a-sentence-using-the-compromise-library-in-javascript
   */
  const nlpStr = nlp(calcedStr);

  if (count > 1) {
    nlpStr.nouns().toPlural();
  } else {
    nlpStr.nouns().toSingular();
  }

  return {
    encounter: aFor1(nlpStr.out("text") as string),
    description
  };
};
