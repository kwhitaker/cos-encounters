import { EncounterFactory, genericEncounter } from "../../types";

export const needleBlights: EncounterFactory = {
  dayRoll: 18,
  factory: genericEncounter({
    encounter: "2d4 needle blight",
    description:
      "Hunched figures lurch through the mist, their gaunt bodies covered in needles."
  }),
  nightRoll: 14,
  dictionary: {
    words: {
      blight: "Noun",
      needle: "Adjective"
    },
    plurals: { blight: "blights" }
  }
};
