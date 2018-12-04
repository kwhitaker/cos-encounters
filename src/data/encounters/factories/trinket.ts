import { Encounter, EncounterFactory } from "../../types";

export const trinket: EncounterFactory = {
  dayRoll: 9,
  factory: (): Encounter => {
    const result = Math.floor(Math.random() * 100) + 1;

    return {
      encounter: `1 Trinket (${result})`,
      description: "You find something on the ground."
    };
  },
  nightRoll: 5
};
