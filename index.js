const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');

require('dotenv').config();

app = express();

app.use(helmet())
   .use(express.static('./public'))
   .use(morgan('tiny'));

app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'public', 'index.html'));
});

port = process.env.PORT || 1337;
app.listen(port, () => {
    console.log(`Listening at PORT ${port}`);
});
