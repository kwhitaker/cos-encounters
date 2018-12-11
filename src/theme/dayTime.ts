import { TimeOfDay } from "../data/types";
import { CoSTheme } from "./types";

const DayTheme: CoSTheme = {
  [TimeOfDay.DayTime]: {
    button: {
      backgroundColor: "darkred",
      color: "white",
      border: "1px solid transparent"
    },
    description: {},
    header: {
      borderColor: "darkred",
      color: "black"
    },
    scaffold: {
      backgroundColor: "rgb(156, 161, 172)",
      backgroundImage:
        "linear-gradient(180deg, rgba(156,161,172,1) 0%, rgba(156,161,172,1) 35%, rgba(0,0,0,1) 100%)"
    },
    subheader: {
      color: "darkred"
    }
  }
};

export default DayTheme;
