import { Block, styled } from "reakit";

import { PirataFont } from "../theme/globalStyle";

const SubHeader = styled(Block)`
  font-family: ${PirataFont};
  font-size: 1.125rem;
  line-height: 1.125rem;
  margin-bottom: 0.75rem;
  color: ${props => props.theme.subheader.color};
`;

export default SubHeader;
