import dotenv from "dotenv";

import app from "./app";

dotenv.config();

const port = 3000;

app.listen(process.env.PORT || port, () => {
  console.log(`Server is up and running.`);
});