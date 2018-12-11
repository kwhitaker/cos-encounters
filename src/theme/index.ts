import DayTheme from "./dayTime";
import NightTheme from "./nightTime";
import { CoSThemes } from "./types";

export default {
  ...DayTheme,
  ...NightTheme
} as CoSThemes;
