import { assoc, prop } from "ramda";

import { factories } from "./factories";
import { EncountersMap, EncounterFactory } from "../types";

export const buildEncountersMap = (factories: EncounterFactory[]) => (
  rollProp: "dayRoll" | "nightRoll"
): EncountersMap =>
  factories
    .filter(f => Boolean(f[rollProp]))
    .sort((f1, f2) => f1[rollProp]! - f2[rollProp]!)
    .reduce((memo: EncountersMap, current) => {
      const roll = prop(rollProp, current);
      return !roll ? memo : assoc(`${roll}`, current.factory, memo);
    }, {});

const factoriesMap = buildEncountersMap(factories);
const dayTime = factoriesMap("dayRoll");
const nightTime = factoriesMap("nightRoll");

export default {
  dayTime,
  nightTime
};
