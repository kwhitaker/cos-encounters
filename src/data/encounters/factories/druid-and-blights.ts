import { EncounterFactory, genericEncounter } from "../../types";

export const druidAndBlights: EncounterFactory = {
  dayRoll: 17,
  factory: genericEncounter({
    encounter: "1 druid with 2d6 twig blight",
    description:
      "A gaunt figure with wild hair and bare feet bounds toward you on all fours, wearing a tattered gown of stitched ani­ mal skins. You can't tell whether it's a man or a woman. It stops, sniffs the air, and laughs like a lunatic. The ground nearby is crawling with tiny twig monsters."
  }),
  nightRoll: 13,
  dictionary: {
    words: {
      druid: "Ignore",
      blight: "Noun",
      twig: "Adjective"
    },
    plurals: { blight: "blights" }
  }
};
