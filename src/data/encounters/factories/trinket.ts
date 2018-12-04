import { Encounter, EncounterFactory, RandomTable } from "../../types";
import { d100, lookupFromTable } from "../../dice-utils";

const trinkets: RandomTable = {
  1: "A picture you drew as a child of your imaginary friend",
  3: "A lock that opens when blood is dripped in its keyhole",
  5: "Clothes stolen from a scarecrow",
  7: "A spinning top carved with four faces: happy, sad, wrathful, and dead",
  9: "The necklace of a sibling who died on the day you were born",
  11: "A wig from someone executed by beheading",
  13: "The unopened letter to you from your dying father",
  15: "A pocket watch that runs backward for an hour every midnight",
  17: "A winter coat stolen from a dying soldier",
  19: "A bottle of invisibl ink that can only be-read at sunset",
  21: "A wineskin that refills when interred with a dead person for a night",
  23: "A set of silverware used by a king for his last meal",
  25: "A spyglass that always shows the world suffering a terrible storm",
  27: "A cameo with the profile's face scratched away",
  29: "A lantern with a black candle that never runs out and that burns with green flame",
  31: "A teacup from a child's tea set, stained with blood",
  33: "A little black book that records your dreams, and yours alone, when you sleep",
  35: "A necklace formed of the interlinked holy symbols of a dozen deities",
  37: "A hangman's noose that feels heavier than it should",
  39: "A birdcage into which small birds fly but once inside never eat or leave",
  41: "A lepidopterist's box filled dead moths with skull- like patterns on their wings",
  43: "A jar of pickled ghouls' tongues",
  45: "The wooden hand of a notorious pirate",
  47: "An urn with the ashes of a dead relative",
  49: "A hand mirror backed with a bronze depiction of a medusa",
  51: "Pallid leather gloves crafted with ivory fingernails",
  53: "Dice made from the knuckles of a notorious charlatan",
  55: "A ring of keys for forgotten locks",
  57: "Nails from the coffin of a murderer",
  59: "A key to the family crypt",
  61: "An bouquet of funerary flowers that always looksand smells fresh",
  63: "A switch used to discipline you as a child",
  65: "A music box that plays by itself whenever someone holding it dances",
  67: "A walking cane with an iron ferule that strikes sparks on stone",
  69: "A flag from a ship lost at sea",
  71: "Porcelain doll's head that always seems to be looking at you",
  73: "A wolf's head wrought in silver that is also a whistle.",
  75: "A small mirror that shows a much older version of the viewer",
  77: "Small, worn book of children's nursery rhymes",
  79: "A mummified raven claw",
  81: "A broken pendent of a silver dragon that's always cold to the touch",
  83: "A small locked box that quietly hums a lovely melody at night but you always forget it in the morning",
  85: "An inkwell that makes one a little nauseous when staring at it",
  87: "An old little doll made from a dark, dense·wood and missing a hand and a foot",
  89: "A black executioner's hood",
  91: "A pouch made offlesh, with a sinew drawstring",
  93: "A tiny spool of black thread that never runs out",
  94: "A tiny clockwork figur!(le ·of a-dancer _that's missing a gear and doesn't work",
  97: "A black wooden pipe that creates puffs of smoke that look like skulls",
  99: "A vial ofperfume, the scent of which only certain Creatures can detect"
};

const junkbox = lookupFromTable(trinkets);

export const trinket: EncounterFactory = {
  dayRoll: 9,
  factory: (): Encounter => {
    const trinket = junkbox(d100())!.toLowerCase();
    return {
      encounter: `1 Trinket`,
      description: `You find something on the ground: ${trinket}.`
    };
  },
  nightRoll: 5
};
