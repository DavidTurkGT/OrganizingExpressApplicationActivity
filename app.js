const express = require('express');
const mustacheExpress = require('mustache-express');
const session = require('express-session');
const bodyParser = require('body-parser');
const app = express();

const numberRouter = require("./routes/number")
const wordRouter = require("./routes/word")

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(express.static('public'));

app.use(session({
  secret: 'tROi$ e+ D3uX Et 1',
  resave: false,
  saveUninitialized: true
}));

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set ('view engine', 'mustache');

let numberObj = {};
let wordObj = {};


// Routes
app.get('/', function(req, res) {
  numberObj = {};
  wordObj = {};
  res.render('index');
});

app.use('/number', numberRouter);
app.use('/word', wordRouter);


app.listen(8000, function() {
  console.log("Working hard... Listening on 8000");
});
