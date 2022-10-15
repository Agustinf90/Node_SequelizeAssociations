const express = require("express");
const bodyParser = require("body-parser");

require("./database/database");

const app = express();
const apiRouter = require("./routes/api");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/static", express.static(__dirname + "/public"));
app.use("/api", apiRouter);

const server = app.listen(process.env.PORT || 3000, () => {
  console.log("listening to port 3000");
});


