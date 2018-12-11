import { Button, styled } from "reakit";

import { PirataFont } from "../theme/globalStyle";
import { unwrapCssProps } from "../theme";

const btnProps = unwrapCssProps("button");
const btnBgColor = btnProps("backgroundColor");
const btnColor = btnProps("color");
const btnBorder = btnProps("border");

const FateButton = styled(Button)`
  margin: 0 0.5rem;
  padding: 0.5rem;
  font-size: 1.125rem;
  font-family: ${PirataFont};
  cursor: pointer;
  background-color: ${btnBgColor};
  color: ${btnColor};
  border: ${btnBorder};
  transition: all 200ms ease;
`;

export default FateButton;
