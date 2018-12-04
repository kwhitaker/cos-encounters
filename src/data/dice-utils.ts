import { findLast, last, toPairs } from "ramda";

import { RandomTable } from "./types";

export const dieTest = new RegExp(/(\d+)?d(\d+)([+-]\d+)?/);

export const randRoll = (max: number) => Math.floor(Math.random() * max) + 1;

export const lookupFromTable = (table: RandomTable) => (roll: number) => {
  const result = findLast(
    ([minRoll]) => ((minRoll as any) as number) <= roll,
    toPairs(table)
  );
  return result ? last(result) : table[1];
};

export const dieResult = (sides: number) => () => randRoll(sides);
export const d100 = dieResult(100);
export const d12 = dieResult(12);
export const d8 = dieResult(8);
