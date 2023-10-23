const express = require('express');
const app = express();
require('./db');
const router = express.Router();
const routes = require("./routes");
require('dotenv').config();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// routes for the app
app.use("/", routes);

const http = require('http').createServer(app);

http.listen(process.env.PORT, () => {
  console.log(`Server is running on ${process.env.PORT}`);
});
