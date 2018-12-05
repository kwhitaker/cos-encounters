const AirTable = require("airtable");

import { Encounter } from "./types";

AirTable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: process.env.REACT_APP_API_KEY
});

const base = AirTable.base(process.env.REACT_APP_AIRTABLE_BASE);

export const saveEncounter = (encounter: Encounter) => {
  if (process.env.NODE_ENV !== "production") {
    return;
  }

  base("Encounters").create(
    {
      timestamp: new Date().toISOString(),
      ...encounter
    },
    (err: any, record: any) => {
      if (err) {
        console.error(err);
      }
      console.log(record.getId());
    }
  );
};
