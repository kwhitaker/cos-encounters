import { Heading, styled } from "reakit";

import { PirataFont } from "./shared-styles";

const AppHeader = styled(Heading)`
  margin-top: calc((1.5rem - 2rem) + 1.5rem);
  margin-bottom: 1.5rem;
  font-family: ${PirataFont};
  font-size: 2em;
  line-height: 2em;
  text-transform: capitalize;
  border-bottom: 2px solid darkred;
`;

export default AppHeader;
