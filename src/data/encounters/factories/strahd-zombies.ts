import { EncounterFactory, genericEncounter } from "../../types";

export const strahdZombies: EncounterFactory = {
  factory: genericEncounter({
    encounter: "1d8 strahd zombie",
    description:
      "Not even the cloying fog can hide the stench of death that descends upon you. Something evil approaches, its footsteps betrayed by snapping twigs."
  }),
  nightRoll: 18,
  dictionary: {
    words: {
      strahd: "Adjective",
      zombie: "Noun"
    },
    plurals: { zombie: "zombies" }
  }
};
