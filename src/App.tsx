import React, { PureComponent } from "react";
import { equals } from "ramda";
import { ThemeProvider } from "reakit";

import { saveEncounter } from "./data/api";
import encounters from "./data/encounters";
import { factories, nlpNounPlugin } from "./data/encounters/factories";
import { calculateEncounter } from "./data/calculators";
import { d8, d12 } from "./data/dice-utils";
import { Encounter, TimeOfDay } from "./data/types";
import ActionsWrapper from "./components/actions-wrapper";
import AppHeader from "./components/app-header";
import AppLayout from "./components/app-layout";
import Scaffold from "./components/scaffold";
import EncounterDescription from "./components/encounter-description";
import FateButton from "./components/fate-button";
import SubHeader from "./components/sub-header";
import Copyright from "./components/copyright";
import themes from "./theme/";

interface AppState {
  currentEncounter: undefined | Encounter;
  timeOfDay: TimeOfDay;
}

const encounterRoll = () => d12() + d8();
const encounterCalculator = calculateEncounter(nlpNounPlugin(factories));

class App extends PureComponent<{}, AppState> {
  state: AppState = {
    currentEncounter: undefined,
    timeOfDay: TimeOfDay.DayTime
  };

  componentDidMount() {
    this.setState({ currentEncounter: this.calcEncounter() });
  }

  componentDidUpdate(_: {}, prevState: AppState) {
    const { currentEncounter: lastEncounter, timeOfDay: prevTime } = prevState;
    const { currentEncounter, timeOfDay } = this.state;

    if (!equals(currentEncounter, lastEncounter) && currentEncounter) {
      saveEncounter(currentEncounter);
    }
  }

  render() {
    const { timeOfDay } = this.state;

    return (
      <ThemeProvider theme={themes[timeOfDay]}>
        <Scaffold column>
          <AppLayout column>
            {this.renderLoading()}
            {this.renderEncounter()}
            <ActionsWrapper>
              <FateButton onClick={this.handleEncounterRolled}>
                Tempt Fate&hellip;
              </FateButton>
              <FateButton onClick={this.handleTimeOfDayChanged}>
                {timeOfDay === "dayTime"
                  ? "Summon the Night"
                  : "Praise the Morning"}
              </FateButton>
            </ActionsWrapper>
          </AppLayout>
          <Copyright absolute>Text &copy; Wizards of the Coast.</Copyright>
        </Scaffold>
      </ThemeProvider>
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
        <AppHeader as="h1">
          <SubHeader>Through the Mists You Spy&hellip;</SubHeader>
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
