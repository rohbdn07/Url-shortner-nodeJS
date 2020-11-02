const express = require("express");
const morgon = require("morgan");
const router = express.Router();
const path =require('path');
const mangoose = require("mongoose");
const bodyParser = require("body-parser");
const urlRoute = require('./routes/urlRoute');
const methodOverride= require("method-override");
require('dotenv').config();

//express app
const app = express();

//listing to LocalHost
const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log(`listening on ${PORT}`));

//connect to Mangodb...
const dbURI = process.env.mongodb_URI;
mangoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("connected to db"))
  .catch((err) => console.log("there is an error", err));

//register view engine
app.set("view engine", "ejs");

/** bodyParser.urlencoded(options)
 * Parses the text as URL encoded data (which is how browsers tend to send form data from regular forms set to POST)
 * and exposes the resulting object (containing the keys and values) on req.body
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
  })
);

//middleware and static files...
app.use(express.static(path.join(__dirname, "public")));

//Method-Override
app.use(methodOverride('_method'));

app.use(morgon("dev"));

//Url-shortner routes
app.use(urlRoute);

