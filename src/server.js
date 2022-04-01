const app = require("./index");
require("dotenv").config();

const connect = require("./configs/db");

const port = process.env.PORT || 8081;

app.listen(port, async () => {
  try {
    await connect();
    console.log("Listening to the port 8081");
  } catch (e) {
    console.log(e.message);
  }
});
