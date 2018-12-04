import { EncounterFactory, genericEncounter } from "../../types";

export const direWolves: EncounterFactory = {
  dayRoll: 12,
  factory: genericEncounter({
    encounter: "1d6 dire wolf",
    description:
      "A snarling wolf the size of a grizzly bear steps out of the fog."
  }),
  nightRoll: 10,
  dictionary: {
    words: {
      dire: "Adjective",
      wolf: "Noun"
    },
    plurals: {
      wolf: "wolves"
    }
  }
};
