import { EncounterFactory, genericEncounter } from "../../types";

export const scouts: EncounterFactory = {
  dayRoll: 3,
  factory: genericEncounter({
    encounter: "1d6 barovian scout",
    description:
      "You see a dark figure crouched low and perfectly still, aiming a crossbow at you."
  }),
  dictionary: {
    words: {
      scout: "Noun",
      barovian: "Adjective"
    },
    plurals: {
      scout: "scouts"
    }
  }
};
