import { EncounterFactory, genericEncounter } from "../../types";

export const zombies: EncounterFactory = {
  nightRoll: 16,
  factory: genericEncounter({
    encounter: "3d6 Zombies",
    description:
      "The ungodly stench of rotting flesh hangs in the air. Up ahead, the walking, moaning corpses of dead men and women lumber about."
  }),
  dictionary: {
    words: {
      zombie: "Noun"
    },
    plurals: {
      zombie: "zombies"
    }
  }
};
