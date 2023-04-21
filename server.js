const express = require("express");
const app = express();
const cors = require('cors');
const server = app.listen(process.env.PORT || 8080, () => console.log("Listening on 8080"));

app.use(express.static("public"));
app.use(cors());

app.locals.countries = require('./countries.json').countries;

app.get('/api/countries', (req, res) => {
    res.json(app.locals.countries);
})