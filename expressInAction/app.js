let express = require("express");
let http = require("http");
let path = require("path");
let app = express();

let publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));

app.use((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/plain"
    });
    res.end("Looks like you didn't find a static file.");
});

app.get("/", (req, res) => {
    res.end("Welcome to FizzBuzz Nodejs Kata!");
});

app.get("/fizzbuzz/:number", (req, res) => {
    if (req.params.number % 3 === 0) {
        res.end(`number: Fizz`);
    }
    res.end(`number: ${req.params.number}`);
});

app.get("/about", (req, res) => {
    res.end("Author: David Crespo!");
});

app.set('port', 3000);
app.listen(app.get('port'), () => {
    console.log(`server running on port ${app.get('port')}`);
});