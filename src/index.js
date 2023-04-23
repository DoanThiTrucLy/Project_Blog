const path = require('path');
const express = require('express');
const cors = require('cors')
const app = express();
const port = 3000;

const route = require('./routes');
const db = require('./config/db');
// Connect to DB
db.connect();

app.use(express.static(path.join(__dirname, 'public')));


app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(cors());

//Routes init
route(app);

app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`),
);
