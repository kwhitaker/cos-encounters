import { Block, styled } from "reakit";

import { PirataFont } from "../theme/globalStyle";
import { unwrapCssProps } from "../theme";

const subHeaderProps = unwrapCssProps("subheader");
const subHeaderColor = subHeaderProps("color");

const SubHeader = styled(Block)`
  font-family: ${PirataFont};
  font-size: 1.125rem;
  line-height: 1.125rem;
  margin-bottom: 0.75rem;
  color: ${subHeaderColor};
`;

SubHeader.displayName = "SubHeader";

export default SubHeader;
