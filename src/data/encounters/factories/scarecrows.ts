import { EncounterFactory, genericEncounter } from "../../types";

export const scarecrows: EncounterFactory = {
  dayRoll: 19,
  factory: genericEncounter({
    encounter: "1d6 scarecrow",
    description:
      "A scarecrow lurches into view. Its sackcloth eyes and ric­ us are ripe with malevolence, and its gut is stuffed with dead ravens. It has long, rusted knives for claws."
  }),
  nightRoll: 17,
  dictionary: {
    words: {
      scarecrow: "Noun"
    },
    plurals: {
      scarecrow: "scarecrows"
    }
  }
};
