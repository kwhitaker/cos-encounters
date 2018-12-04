import { EncounterFactory, genericEncounter } from "../../types";

export const skeletalRider: EncounterFactory = {
  dayRoll: 8,
  factory: genericEncounter({
    encounter: "1 skeletal rider",
    description:
      "Through the mist comes a skeletal warhorse and rider, both clad in ruined chainmail. The skeletal rider holds up a rusted lantern that sheds no light."
  }),
  nightRoll: 8
};
