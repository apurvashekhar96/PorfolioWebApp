const path = require("path");
const express = require("express");

const mongoose = require("mongoose");

const { nextTick } = require("process");
const fs = require("fs");

const bodyParser = require("body-parser");

//importing routes
const configRoutes = require("./routes/configRoute");
const formDataRoutes = require("./routes/formDataRoute");
const userRoutes = require("./routes/handleUserRoute");

//initializing express.
const app = express();
mongoose.set("strictQuery", true);

//mongoDB url
const mongourl =
  "mongodb+srv://apurvashekhar:prince56789@cluster0.wxzmhse.mongodb.net/portfolioapp";

app.use(express.static(path.join(__dirname, "portfolioappclient/build")));

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Authorization, Content-Type");
  next();
});

app.use(configRoutes);

app.use(formDataRoutes);

app.use(userRoutes);

app.use("*", (req, res, next) => {
  res.sendFile(path.join(__dirname, "portfolioappclient/build", "index.html"));
  next();
});

//error handling middleware
app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
});

// if (process.env.NODE_ENV === "production") {
//   // Handle React routing, return all requests to React app
//   app.get("*", function (req, res) {
//     res.sendFile(
//       path.join(__dirname, "portfolioappclient/build", "index.html")
//     );
//   });
// }

mongoose
  .connect(mongourl)
  .then((result) => {
    app.listen(process.env.PORT || 3001, (req, res) => {
      console.log(`server running now.`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

// "start": "react-scripts start",
// "start:server": "json-server --watch db.json --port 3001",

module.exports = app;
