import React, { PureComponent } from "react";
import { Button, Heading, Block, Flex, Paragraph, styled } from "reakit";

import encounters from "./data/encounters";
import { factories, nlpNounPlugin } from "./data/encounters/factories";
import { calculateEncounter } from "./data/calculators";
import { randRoll } from "./data/dice-utils";
import { Encounter, TimeOfDay } from "./data/types";

const AppWrapper = styled(Flex)`
  justify-content: center;
  align-items: center;
`;

const AppHeader = styled(Heading)`
  margin-top: calc((1.5rem - 2rem) + 1.5rem);
  margin-bottom: 1.5rem;
  font-family: "Pirata One", cursive;
  font-size: 2em;
  line-height: 2em;
  text-transform: capitalize;
  border-bottom: 2px solid darkred;
`;

const SubHeader = styled(Block)`
  font-size: 0.825rem;
  line-height: 0.825rem;
  color: darkred;
`;

const EncounterDescription = styled(Paragraph)`
  margin-bottom: 1.5rem;
  padding: 1.5rem;
  line-height: 1.5rem;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 6px;
`;

const ActionsWrap = styled(Flex)`
  margin: 1rem;
  justify-content: center;
`;

const FateButton = styled(Button)`
  margin: 0 0.5rem;
  padding: 0.5rem;
  font-size: 0.825rem;
  font-family: "Pirata One", cursive;
  cursor: pointer;
  color: white;
  background-color: darkred;
`;

interface AppState {
  currentEncounter: undefined | Encounter;
  timeOfDay: TimeOfDay;
}

const encounterRoll = () => randRoll(12) + randRoll(8);
const encounterCalculator = calculateEncounter(nlpNounPlugin(factories));

class App extends PureComponent<{}, AppState> {
  state: AppState = {
    currentEncounter: undefined,
    timeOfDay: TimeOfDay.DayTime
  };

  componentDidMount() {
    this.setState({ currentEncounter: this.calcEncounter() });
  }

  render() {
    const { timeOfDay } = this.state;

    return (
      <AppWrapper column>
        {this.renderLoading()}
        {this.renderEncounter()}
        <ActionsWrap>
          <FateButton onClick={this.handleEncounterRolled}>
            Tempt Fate Again&hellip;
          </FateButton>
          <FateButton onClick={this.handleTimeOfDayChanged}>
            {timeOfDay === "dayTime" ? "Day" : "Night"}
          </FateButton>
        </ActionsWrap>
      </AppWrapper>
    );
  }

  private renderEncounter() {
    const { currentEncounter } = this.state;
    if (!currentEncounter) {
      return null;
    }

    const { encounter, description } = currentEncounter;
    return (
      <>
        <AppHeader>
          <SubHeader>The Dark Powers Send Forth&hellip;</SubHeader>
          {encounter}!
        </AppHeader>
        <EncounterDescription>{description}</EncounterDescription>
      </>
    );
  }

  private renderLoading() {
    const { currentEncounter } = this.state;
    if (currentEncounter) {
      return null;
    }

    return <AppHeader>Summoning&hellip;</AppHeader>;
  }

  private calcEncounter() {
    const { timeOfDay } = this.state;
    const encIdx = encounterRoll();
    const encFunc = encounters[timeOfDay][encIdx];
    return encounterCalculator(encFunc);
  }

  private handleEncounterRolled = () => {
    this.setState({
      currentEncounter: this.calcEncounter()
    });
  };

  private handleTimeOfDayChanged = () => {
    this.setState(
      ({ timeOfDay }) => ({
        timeOfDay:
          timeOfDay === TimeOfDay.DayTime
            ? TimeOfDay.NightTime
            : TimeOfDay.DayTime
      }),
      () => {
        this.setState({
          currentEncounter: this.calcEncounter()
        });
      }
    );
  };
}

export default App;
