import { genericEncounter, EncounterFactory } from "../../types";

export const werewolvesWolf: EncounterFactory = {
  factory: genericEncounter({
    encounter: "1d6 werewolf in beast form",
    description: "You hear the howl of a wolf some distance away."
  }),
  nightRoll: 15,
  dictionary: {
    words: {
      beast: "Adjective",
      form: "Ignore",
      werewolf: "Noun"
    },
    plurals: {
      werewolf: "werewolves"
    }
  }
};
