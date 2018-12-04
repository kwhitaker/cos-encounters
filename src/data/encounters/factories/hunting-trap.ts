import { EncounterFactory, genericEncounter } from "../../types";

export const huntingTrap: EncounterFactory = {
  dayRoll: 4,
  factory: genericEncounter({
    encounter: "1 Hunting Trap",
    description:
      "You spot a wolf trap, its steel jaws caked with rust. Some­ one has carefully hidden the trap under a thin layer of pine needles and detritus."
  }),
  nightRoll: 3
};
