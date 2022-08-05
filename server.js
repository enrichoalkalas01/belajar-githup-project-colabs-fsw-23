/* Setup Sederhana */
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const port = process.env.PORT || 7777;

// perlu ditambahkan setup file config.env
dotenv.config({ path: __dirname + '/config/config.env' })

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");

// perlu ditambahkan setup file public access
app.use(express.static("public"));

app.listen(port, () => console.log(`server is running in port : ${port}`));
