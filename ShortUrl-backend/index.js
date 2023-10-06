const express = require("express");
const bodyParser = require("body-parser");
const urlRouter = require("./Routers/urlRouter");
const dbConnect = require("./dbConnection");
const cors = require("cors");
const app = express();
const PORT = 5000;
app.use(express.json());
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
dbConnect("mongodb://0.0.0.0:27017/url-short");
app.use("/url", urlRouter);

app.listen(PORT, () => console.log(`Servsr is running at ${PORT} port`));
