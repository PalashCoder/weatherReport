const { json } = require("body-parser");
const express = require("express");
const https = require("https");

const app = express();

app.get("/", function (req, res) {
    const url = "https://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=e72ca729af228beabd5d20e3b7749713&units=metric";
    //key is wrong so code is unabailable in right run.
    https.get(url, function (response) {
        console.log(response);
        response.on("data", function (data) {
            console.log("Printing Data");
            const weatherdata = JSON.parse(data);
            res.send(weatherdata)
        });
    });
});
app.listen(3000, function () {
    console.log("Server Online");
});