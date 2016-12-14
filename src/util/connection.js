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
    require(path.resolve('src/entity/offer.js'))
  ],
  autoSchemaSync: true

});

module.exports = connection;
