const express = require("express");
const app = express();

const port = 3040;
app.listen(port,() => {
    console.log("Listening to port " +port);
})

app.get("/", (req, res) => {
    const content = `
    <html>
        <head>
            <style>
                .header-container {
                    position: relative;
                    text-align: center;
                    font-size: larger;
                }
                .main-container {
                    margin: 20px;
                    font-size: larger;
                }
                .position{
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    z-index: 1;
                }
                body{
                    background-color: black;
                    color: white;
                }
            </style>
        </head>

        <body>
            <div class = "header-container">
                <img src = "https://as1.ftcdn.net/v2/jpg/03/03/36/10/1000_F_303361005_B3EgdOHbgeoEieg7M3GnFpyYBhO274l9.jpg" style="width:100%">
                <div class = "position">
                    <h1 style = "font-size: 500%;"> SPACE </h1>
                </div>
            </div>

            <div class = "main-container">  
                <p> Outer space (or simply space) is the expanse beyond celestial bodies and their atmospheres. Outer space is not completely empty.
                    It is a near-perfect vacuum containing a low density of particles, predominantly a plasma of hydrogen and helium as well as 
                    electromagnetic radiation, magnetic fields, neutrinos, dust, and cosmic rays. The baseline temperature of outer space, as set by 
                    the background radiation from the Big Bang, is 2.7 kelvins.
                </P>
                <p style = "margin-top: 20px;">
                    <a href="https://en.wikipedia.org/wiki/Outer_space" style = "color: white;"> CLICK HERE FOR MORE INFORMATION! </a>
                </p>
            </div>
        </body>
    `;
    res.set("Content-type", "text/html");
    res.send(Buffer.from(content));
});