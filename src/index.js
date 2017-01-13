const path = require('path');
const http = require('http');
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const authenticate = require(path.resolve('src/util/authenticate'));
const constants = require(path.resolve('src/util/constants'));
const offerRoutes = require(path.resolve('src/routes/offer'));
const checkpointRoutes = require(path.resolve('src/routes/checkpoint'));
const userRoutes = require(path.resolve('src/routes/user'));
const permissionRoutes = require(path.resolve('src/routes/permission'));
const permissionUserRoutes = require(path.resolve('src/routes/permissionUser'));
const clientRefusalRoutes = require(path.resolve('src/routes/clientRefusal'));

/* App Configuration */
const app = express();
app.set('port', constants.server.port);
app.set('title', constants.app.name);

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(helmet());

app.use(express.static('public'));
app.use('/admin', express.static('public'));

app.all('/api/*', function(req, res, next) {
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  authenticate.checkToken(req, res, next);
});

app.get('/', function(req, res){
  res.sendFile( path.resolve('public/index.html') );
});

offerRoutes(app);
checkpointRoutes(app);
userRoutes(app);
permissionRoutes(app);
permissionUserRoutes(app);
clientRefusalRoutes(app);

http.createServer(app).listen(app.get('port'), function() {
  console.log(app.get('title') + ' listening on port ' + app.get('port'));
});
