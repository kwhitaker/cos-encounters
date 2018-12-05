import { Flex, styled } from "reakit";

const AppWrapper = styled(Flex)`
  justify-content: center;
  align-items: center;
  transition: max-width 200ms ease;

  @media screen and (min-width: 50em) {
    max-width: 35vw;
  }

  @media only screen and (min-width: 1024px) and (max-height: 1366px) and (-webkit-min-device-pixel-ratio: 1.5) {
    max-width: 55vw;
  }

  @media only screen and (min-width: 1024px) and (max-height: 1366px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1.5) {
    max-width: 50vw;
  }

  @media only screen and (min-width: 812px) and (max-height: 375px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1.5) {
    max-width: 55vw;
  }

  @media only screen and (max-width: 768px) {
    max-width: 55vw;
  }
`;

export default AppWrapper;
