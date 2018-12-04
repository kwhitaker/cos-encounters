import { EncounterFactory, genericEncounter } from "../../types";

export const hiddenBundle: EncounterFactory = {
  dayRoll: 10,
  factory: genericEncounter({
    encounter: "1 Hidden Bundle",
    description:
      "The bundle contains one set of common clothes sized for an adult."
  }),
  nightRoll: 7
};
