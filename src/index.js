const path = require('path');
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const constants = require(path.resolve('src/util/constants'));
const offerRoutes = require(path.resolve('src/routes/offer'));
const checkpointRoutes = require(path.resolve('src/routes/checkpoint'));
const userRoutes = require(path.resolve('src/routes/user'));
const permissionRoutes = require(path.resolve('src/routes/permission'));
const permissionUserRoutes = require(path.resolve('src/routes/permissionUser'));

/* App Configuration */
const app = express();
app.set('port', constants.server.port);
app.set('title', constants.app.name);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(helmet());


offerRoutes(app);
checkpointRoutes(app);
userRoutes(app);
permissionRoutes(app);
permissionUserRoutes(app);

http.createServer(app).listen(app.get('port'), function() {
  console.log(app.get('title') + ' listening on port ' + app.get('port'));
});
