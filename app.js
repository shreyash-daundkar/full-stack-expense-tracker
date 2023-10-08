const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


const expenseRouter = require('./routes/expense');
const database = require('./util/database');


const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());

app.use('/expense', expenseRouter);

database.sync().then(() => app.listen(4000));