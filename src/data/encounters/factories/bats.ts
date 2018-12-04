import { EncounterFactory, genericEncounter } from "../../types";

export const bats: EncounterFactory = {
  nightRoll: 9,
  factory: genericEncounter({
    encounter: "1d8 swarm of bats",
    description:
      "The stillness of the night is shattered by the shriek of bats and the flapping of tiny black wings"
  }),
  dictionary: {
    words: {
      bats: "Ignore", // a singular swarm is always multiple bats
      swarm: "Noun"
    },
    plurals: {
      swarm: "swarms"
    }
  }
};
