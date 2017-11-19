let express = require('express');
let app = express();
let bodyParser = require('body-parser');
const SnowTransfer = require('snowtransfer');
const config = require('./config/config.json');
let snowtransfer = new SnowTransfer(config.token);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use((req, res, next) => {
    req.rest = snowtransfer;
    next();
});
app.use('/api/v7', require('./routes/channels'));
app.listen(config.port, config.host);
console.log(`App started on ${config.host}:${config.port}`);