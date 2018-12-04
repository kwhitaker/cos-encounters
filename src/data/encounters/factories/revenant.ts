import { EncounterFactory, genericEncounter } from "../../types";

export const revenant: EncounterFactory = {
  dayRoll: 20,
  factory: genericEncounter({
    encounter: "1 revenant",
    description:
      "A figure walks alone with the stride and bearing of one who knows no fear. Clad in rusty armor, it clutches a gleaming longsword in its pale hand and looks ready for a fight."
  }),
  nightRoll: 20
};
