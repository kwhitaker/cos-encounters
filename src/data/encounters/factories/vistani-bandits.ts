import { EncounterFactory, genericEncounter } from "../../types";

export const vistaniBandits: EncounterFactory = {
  dayRoll: 7,
  factory: genericEncounter({
    encounter: "1d4+1 vistani bandit",
    description:
      "You catch a whiff of pipe smoke in the cold air and hear laughter through the fog."
  }),
  dictionary: {
    words: {
      bandit: "Noun",
      vistani: "Adjective"
    },
    plurals: { bandit: "bandits" }
  }
};
