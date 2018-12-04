import { EncounterFactory, genericEncounter } from "../../types";

export const wolves: EncounterFactory = {
  dayRoll: 13,
  factory: genericEncounter({
    encounter: "3d6 wolf",
    description:
      "This land is home to many wolves, their howls at the moment too close for comfort."
  }),
  dictionary: {
    words: {
      wolf: "Noun"
    },
    plurals: {
      wolf: "wolves"
    }
  },
  nightRoll: 11
};
