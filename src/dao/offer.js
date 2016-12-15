'use strict';
const path = require('path');
const oracledb = require('oracledb');
const connection  = require(path.resolve('src/util/pureConnection'));
const constants = require(path.resolve('src/util/constants'));

let dao = {

  getAll: function(cb) {
      connection.getConnection(function(err, conn) {
        conn.execute(constants.query.offer.getAll,
          {}, //no binds
          { outFormat: oracledb.OBJECT },
          cb);
      });

  }

};


module.exports = dao;
