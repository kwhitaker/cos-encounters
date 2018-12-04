import { EncounterFactory, genericEncounter } from "../../types";

export const ghost: EncounterFactory = {
  nightRoll: 2,
  factory: genericEncounter({
    encounter: "1 Ghost",
    description:
      "A baleful apparition appears before you, its hollow eyes dark with anger."
  })
};
