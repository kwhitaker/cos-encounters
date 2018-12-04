import { EncounterFactory, genericEncounter } from "../../types";

export const commoners: EncounterFactory = {
  dayRoll: 2,
  factory: genericEncounter({
    encounter: "3d6 barovian commoner",
    description:
      "The sound of snapping twigs draws your attention to several dark shapes in the fog. They carry torches and pitchforks."
  }),
  dictionary: {
    words: {
      commoner: "Noun",
      barovian: "Adjective"
    },
    plurals: {
      commoner: "commoners"
    }
  }
};
