import { Encounter, EncounterFactory } from "../../types";

const ravenSwarm = {
  encounter: "1d4 swarm of ravens",
  description:
    "Your presence in this dreary land has not gone unno­ticed. A raven follows you for several minutes while keep­ ing a respectful distance. More ravens begin to take an interest in you. Before long, their numbers swell, and soon hundreds of them are watching you."
};

const wereRaven = {
  encounter: "1 wereraven",
  description:
    "Through the mist, you see a black bird circling overhead. When it feels your eyes upon it, the raven flies away, but it's back before long, keeping its distance."
};

export const ravens: EncounterFactory = {
  dayRoll: 11,
  factory: (): Encounter => {
    const result = Math.floor(Math.random() * 100) + 1;
    return result >= 50 ? ravenSwarm : wereRaven;
  },
  dictionary: {
    words: {
      ravens: "Noun",
      wereraven: "Noun",
      swarm: "Noun"
    },
    plurals: {
      ravens: "ravens",
      wereraven: "wereravens",
      swarm: "swarms"
    }
  }
};
