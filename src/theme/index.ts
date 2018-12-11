import { pathOr } from "ramda";
import { CSSProperties } from "react";
import { InterpolationFunction } from "styled-components";

import DayTheme from "./dayTime";
import NightTheme from "./nightTime";
import { CoSThemeProps, CoSThemes } from "./types";

export const unwrapCssProps = (componentName: keyof CoSThemeProps) => (
  propName: keyof CSSProperties
): InterpolationFunction<{ [prop: string]: any }> => (props: CSSProperties) =>
  pathOr("", ["theme", componentName, propName], props);

export default {
  ...DayTheme,
  ...NightTheme
} as CoSThemes;
