import { lookupFromTable, randRoll } from "../../dice-utils";
import { EncounterFactory, RandomTable } from "../../types";

const graves: RandomTable = [
  {
    minRoll: 1,
    description:
      "You stumble upon an elongated earthen mound. Digging through the dirt, you unearth the skeletal remains of a human clad in rusted chain mail. Among the bones lie scattered weapons"
  },
  {
    minRoll: 13,
    description:
      "You stumble upon a stone cairn. Removing the stones reveals dusty bones and corroded weapons."
  },
  {
    minRoll: 14,
    description:
      "You stumble upon a shallow, mud-filled hole with dirt and rocks strewn around it, along with scattered bones."
  }
];

const graveyard = lookupFromTable(graves);

export const grave: EncounterFactory = {
  dayRoll: 5,
  factory: () => {
    const roll = randRoll(100);
    const grave = graveyard(roll)!;
    return {
      encounter: "1 Grave",
      description: grave.description
    };
  },
  nightRoll: 4
};
