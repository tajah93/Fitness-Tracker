const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);


app.listen(3070, () => {
    console.log("App running on port 3070!");
  });


  