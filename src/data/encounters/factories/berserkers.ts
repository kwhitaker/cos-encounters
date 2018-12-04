import { EncounterFactory, genericEncounter } from "../../types";

export const berserkers: EncounterFactory = {
  dayRoll: 14,
  factory: genericEncounter({
    encounter: "1d4 berserker",
    description:
      "You startle a wild-looking figure caked in gray mud and clutching a crude stone axe. Whether it's a man or a woman, you can't tell."
  }),
  nightRoll: 12,
  dictionary: {
    words: {
      berserker: "Noun"
    },
    plurals: {
      berserker: "berserkers"
    }
  }
};
