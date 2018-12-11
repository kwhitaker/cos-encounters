import { Flex, styled } from "reakit";

const Scaffold = styled(Flex)`
  width: 100%;
  min-height: 100%;
  padding: 1.5em;
  align-items: center;
  background-color: ${props => props.theme.scaffold.backgroundColor};
  background-image: ${props => props.theme.scaffold.backgroundImage};
  transition: background-color 200ms linear;
`;

Scaffold.displayName = "Scaffold";

export default Scaffold;
