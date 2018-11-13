const port = process.env.SERVER_PORT || 9999;
const http = require('http');
const app = require('./app.js');
const db = require('mongoose');

//Server
http.createServer(app).listen(port, () => console.log('server online at', port));

//Database
let uri = process.env.MONGO_DB_CONNECTIONSTRING;
db.connect(uri, { useNewUrlParser: true })
    .then(() => console.log('MongoDB Database Server online on port 27017'))
    .catch(err => console.log(err));

db.set('useCreateIndex', true);