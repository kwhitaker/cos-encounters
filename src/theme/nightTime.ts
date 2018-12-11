import { TimeOfDay } from "../data/types";
import { CoSTheme } from "./types";

const NightTheme: CoSTheme = {
  [TimeOfDay.NightTime]: {
    button: {
      backgroundColor: "rgb(94,156,176)",
      color: "black",
      border: "1px solid transparent"
    },
    description: {},
    header: {
      borderBottom: "2px solid rgb(94,156,176)",
      color: "white"
    },
    scaffold: {
      backgroundColor: "rgb(32,19,19)",
      backgroundImage:
        "linear-gradient(180deg, rgba(32,19,19,1) 0%, rgba(70,58,60,0.5) 30%, rgba(94,156,176,1) 100%)"
    },
    subheader: {
      color: "rgb(94,156,176)"
    }
  }
};

export default NightTheme;
