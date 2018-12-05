import { as, Heading, styled } from "reakit";

import { PirataFont } from "../theme/globalStyle";

const AppHeader = styled(Heading)`
  /* margin-top: calc((1.5rem - 2rem) + 1.5rem); */
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 1.5rem;
  font-family: ${PirataFont};
  font-size: 2rem;
  line-height: 2em;
  text-transform: capitalize;
  border-bottom: 2px solid darkred;
`;

export default as("h1")(AppHeader);
