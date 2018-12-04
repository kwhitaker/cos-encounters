import { identity } from "ramda";

import { Encounter } from "../types";

const genericEncounter = (encounter: Encounter) => () => identity(encounter);

export default genericEncounter;
