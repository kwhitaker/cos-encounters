import { findLast } from "ramda";

import { RandomTable, RandomTableResult } from "./types";

export const dieTest = new RegExp(/(\d+)?d(\d+)([+-]\d+)?/);

export const randRoll = (max: number) => Math.floor(Math.random() * max) + 1;

export const lookupFromTable = (table: RandomTable) => (roll: number) => {
  const result = findLast<RandomTableResult>(
    ({ minRoll }) => minRoll <= roll,
    table
  );
  return result || table[0];
};

export const dieResult = (sides: number) => () => randRoll(sides);
