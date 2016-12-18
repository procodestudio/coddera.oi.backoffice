'use strict';
const path = require('path');
const oracledb = require('oracledb');
const connection  = require(path.resolve('src/util/pureConnection'));
const constants = require(path.resolve('src/util/constants'));

let dao = {

  getPermissionsByUser: function(userId, cb) {

    connection.getConnection(function(err, conn) {

      if(err) {
        cb(err);
      } else {
        conn.execute(constants.query.permissionUser.get,
          [userId],
          {outFormat: oracledb.OBJECT},
          cb);
      }
    });

  },

  save: function(obj, cb) {
    connection.getConnection(function(err, conn) {

      if(err) {
        cb(err);
      } else {
        conn.execute(constants.query.permissionUser.save,
          [obj.CODIGO_PERMISSAO, obj.ID_USUARIO],
          { autoCommit: true},
          cb);
      }

    });

  },

  remove: function(permissionCode, userId, cb) {
    connection.getConnection(function(err, conn) {

      if(err) {
        cb(err);
      } else {
        conn.execute(constants.query.permissionUser.remove,
          [permissionCode, userId],
          { autoCommit: true},
          cb);
      }

    });

  }

};


module.exports = dao;
