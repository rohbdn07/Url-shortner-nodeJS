const express = require("express");
const morgon = require("morgan");
const router = express.Router();

//express app
const app = express();

//listing to LocalHost
const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log(`listening on ${PORT}`));


/** bodyParser.urlencoded(options)
 * Parses the text as URL encoded data (which is how browsers tend to send form data from regular forms set to POST)
 * and exposes the resulting object (containing the keys and values) on req.body
 */

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
  })
);