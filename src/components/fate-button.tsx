import { Button, styled } from "reakit";

import { PirataFont } from "../theme/globalStyle";

const FateButton = styled(Button)`
  margin: 0 0.5rem;
  padding: 0.5rem;
  font-size: 1.125rem;
  font-family: ${PirataFont};
  cursor: pointer;
  color: white;
  background-color: darkred;
`;

export default FateButton;
