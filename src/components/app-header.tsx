import { Heading, styled } from "reakit";

import { PirataFont } from "../theme/globalStyle";
import { unwrapCssProps } from "../theme";

const headerProps = unwrapCssProps("header");
const headerColor = headerProps("color");
const headerBorderBtm = headerProps("borderBottom");

const AppHeader = styled(Heading)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 1.5rem;
  font-family: ${PirataFont};
  font-size: 2rem;
  line-height: 2em;
  text-transform: capitalize;
  color: ${headerColor};
  border-bottom: ${headerBorderBtm};
  transition: color 200ms linear, border 200ms linear;

  @media only screen and (max-width: 768px) {
    line-height: initial;
    text-align: center;
  }

  @media only screen and (min-width: 1024px) and (max-height: 1366px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1.5) {
    line-height: initial;
    text-align: center;
  }
`;

AppHeader.displayName = "AppHeader";
export default AppHeader;
