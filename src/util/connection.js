'use strict';

const path = require('path');
const typeORM = require('typeorm');
const constants = require(path.resolve('src/util/constants'));

let connection = typeORM.createConnection({
  driver: {
    type: 'oracle',
    host: constants.db.host,
    port: constants.db.port,
    username: constants.db.username,
    password: constants.db.password,
    sid: constants.db.sid
  },
  entitySchemas: [
    path.resolve('src/entity/*.json')
  ],
  autoSchemaSync: true

}).then(function(conn) {
  connection = conn;
}).catch(function(error) {
  console.log("Error: ", error);
});

module.exports = connection;
