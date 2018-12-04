import { identity } from "ramda";

export interface Encounter {
  encounter: string;
  description: string;
}

export type NLPPlugin = {
  words: {
    [key: string]: "Noun" | "Adjective" | "Ignore";
  };
  plurals?: {
    [key: string]: string;
  };
};

export interface EncounterFactory {
  dayRoll?: number;
  factory: (args?: any) => Encounter;
  nightRoll?: number;
  dictionary?: NLPPlugin;
}

export type EncountersMap = Record<number, (args?: any) => Encounter>;
export type RandomTable = Record<number, string>;

export const genericEncounter = (encounter: Encounter) => () =>
  identity(encounter);

export enum TimeOfDay {
  DayTime = "dayTime",
  NightTime = "nightTime"
}
