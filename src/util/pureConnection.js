'use strict';

const oracledb = require('oracledb');
const path = require('path');
const constants = require(path.resolve('src/util/constants'));

const connectionConfig = {
  user: constants.db.username,
  password: constants.db.password,
  connectString: constants.db.host + ':' + constants.db.port + '/' + constants.db.sid
};


module.exports = {
  getConnection: function(cb) {
    oracledb.getConnection(connectionConfig, cb);
  }
};
