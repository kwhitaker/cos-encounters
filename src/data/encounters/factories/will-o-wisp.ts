import { EncounterFactory, genericEncounter } from "../../types";

export const willOWisp: EncounterFactory = {
  nightRoll: 19,
  factory: genericEncounter({
    encounter: "1 will-o'-wisp",
    description:
      "Several hundred yards away, through the fog, you see a flickering torchlight."
  }),
  dictionary: {
    words: {
      "will-o'-wisp": "Noun"
    }
  }
};
