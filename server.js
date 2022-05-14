const express = require('express');
const app = express();

const apiRoute = require('./routes/api');
const viewRoute = require('./routes/view');

const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
// app.get('/', (req, res) => {
//     res.sendFile('./public/assets/js/index.js');
// })

app.use('/api', apiRoute);

app.use(viewRoute);

app.listen(PORT, () => {
    console.log('app listening' + PORT);
});
