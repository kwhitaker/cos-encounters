import { EncounterFactory } from "../../types";

import { commoners } from "./barovian-commoners";
import { scouts } from "./barovian-scouts";
import { bats } from "./bats";
import { berserkers } from "./berserkers";
import { corpse } from "./corpse";
import { direWolves } from "./dire-wolves";
import { druidAndBlights } from "./druid-and-blights";
import { falseTrail } from "./false-trail";
import { ghost } from "./ghost";
import { grave } from "./grave";
import { hiddenBundle } from "./hidden-bundle";
import { huntingTrap } from "./hunting-trap";
import { needleBlights } from "./needle-blights";
import { ravens } from "./ravens";
import { revenant } from "./revenant";
import { scarecrows } from "./scarecrows";
import { skeletalRider } from "./skeletal-rider";
import { strahdZombies } from "./strahd-zombies";
import { trinket } from "./trinket";
import { vistaniBandits } from "./vistani-bandits";
import { werewolvesHuman } from "./werewolves-human";
import { werewolvesWolf } from "./werewolves-wolf";
import { willOWisp } from "./will-o-wisp";
import { wolves } from "./wolves";
import { zombies } from "./zombies";

export const factories = [
  commoners,
  scouts,
  bats,
  berserkers,
  corpse,
  direWolves,
  druidAndBlights,
  falseTrail,
  ghost,
  grave,
  hiddenBundle,
  huntingTrap,
  needleBlights,
  ravens,
  revenant,
  scarecrows,
  skeletalRider,
  strahdZombies,
  trinket,
  vistaniBandits,
  werewolvesHuman,
  werewolvesWolf,
  willOWisp,
  wolves,
  zombies
] as EncounterFactory[];

export const nlpNounPlugin = (encFactories: EncounterFactory[] = factories) =>
  encFactories
    .filter(f => Boolean(f.dictionary))
    .map(f => f.dictionary)
    .reduce(
      (dictionary, current) => ({
        words: { ...dictionary!.words, ...current!.words },
        plurals: { ...dictionary!.plurals, ...current!.plurals }
      }),
      { words: {}, plurals: {} }
    );
