import { lookupFromTable, randRoll } from "../../dice-utils";
import { EncounterFactory, RandomTable } from "../../types";

const corpses: RandomTable = [
  {
    minRoll: 1,
    description:
      "You find the corpse of a wolf, peppered with crossbow bolts and deep puncture wounds."
  },
  {
    minRoll: 3,
    description:
      "You find the corpse of a Barovian peasant, obviously torn apart by wolves. Your scouts recognize it as the person they are seeking."
  },
  {
    minRoll: 6,
    description:
      "You find a corpse, and upon closer inspection you realize it's you! It has no valuables, and when you move it the flesh melts away, leaving only a skeleton."
  }
];

const corpseWagon = lookupFromTable(corpses);

export const corpse: EncounterFactory = {
  dayRoll: 15,
  factory: () => {
    const roll = randRoll(6);
    const corpse = corpseWagon(roll)!;
    return {
      encounter: "1 Corpse",
      description: corpse.description
    };
  },
  nightRoll: 6,
  dictionary: {
    words: {
      corpse: "Noun"
    },
    plurals: { corpse: "corpses" }
  }
};
