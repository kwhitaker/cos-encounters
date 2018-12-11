import { TimeOfDay } from "../data/types";

export type CoSThemeProps = {
  button: React.CSSProperties;
  description: React.CSSProperties;
  header: React.CSSProperties;
  scaffold: React.CSSProperties;
  subheader: React.CSSProperties;
};

export type CoSTheme = { [K in TimeOfDay]?: CoSThemeProps };

export type CoSThemes = Record<TimeOfDay, CoSTheme>;
