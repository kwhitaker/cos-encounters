import { Box, styled } from "reakit";

import { unwrapCssProps } from "../theme";

const copyrightProps = unwrapCssProps("copyright");
const copyrightColor = copyrightProps("color");

const Copyright = styled(Box)`
  bottom: 0;
  right: 0;
  padding: 0.75rem;
  font-size: 0.75rem;
  color: ${copyrightColor};
`;
Copyright.displayName = "Copyright";

export default Copyright;
