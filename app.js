//jshint esversion:6
const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');

require('dotenv').config();
import { createPopper } from '@popperjs/core';

const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
////APP//////////////////////////////////////////////////////////////////////////////////////

app.get("/",function(res,req) {
	res..render("index");
});






const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});
