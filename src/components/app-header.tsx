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
  color: ${props => props.theme.header.color};
  border-bottom: ${props => `2px solid ${props.theme.header.borderColor}`};
  transition: color 200ms linear, border 200ms linear;
`;

export default as("h1")(AppHeader);
