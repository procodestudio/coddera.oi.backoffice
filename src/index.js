const path = require('path');
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const constants = require(path.resolve('src/util/constants'));


/* App Configuration */
const app = express();
app.set('port', constants.server.port);
app.set('title', constants.app.name);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(helmet());


http.createServer(app).listen(app.get('port'), function() {
  console.log(app.get('title') + ' listening on port ' + app.get('port'));
});
