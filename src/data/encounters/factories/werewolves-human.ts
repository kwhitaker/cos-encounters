import { genericEncounter, EncounterFactory } from "../../types";

export const werewolvesHuman: EncounterFactory = {
  dayRoll: 16,
  factory: genericEncounter({
    encounter: `1d6 werewolf in human form`,
    description: `A deep voice calls out, "Who goes there?" Through the chill mist you see a large man in drab clothing wearing a tattered gray cloak. He has shaggy, black hair and thick muttonchops. He leans heavily on a spear and has a small bundle of animal pelts slung over his shoulder.`
  }),
  dictionary: {
    words: {
      form: "Adjective",
      human: "Adjective",
      werewolf: "Noun"
    },
    plurals: {
      werewolf: "werewolves"
    }
  }
};
