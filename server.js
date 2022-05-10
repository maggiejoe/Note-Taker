const express = require('express');
const app = express();

const apiRoute = require('./routes/api');
const viewRoute = require('./routes/view');

const PORT = 3001;

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(express.static('public'));

app.use('/api', apiRoute);

app.use(viewRoute);

app.listen(PORT, () => {
    console.log('app listening' + PORT);
});
