import express from "express";
import path from "path";

import { SSR } from "./middleware";

const PORT = 3000;
const app = express();
const router = express.Router();

router.use("^/$", SSR);
router.use(
  express.static(path.resolve(__dirname, "..", "build"), { maxAge: "30d" })
);

app.use(router);

app.listen(PORT, error => {
  if (error) {
    return console.log("ERROR: ", error);
  }

  console.log(`Listening on ${PORT}`);
});
