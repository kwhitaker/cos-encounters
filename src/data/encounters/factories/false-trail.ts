import { EncounterFactory, genericEncounter } from "../../types";

export const falseTrail: EncounterFactory = {
  dayRoll: 6,
  factory: genericEncounter({
    encounter: "1 false trail",
    description: "You discover a foot trail that cuts through the wilderness."
  })
};
