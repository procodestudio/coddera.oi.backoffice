'use strict';
const path = require('path');
const oracledb = require('oracledb');
const connection  = require(path.resolve('src/util/pureConnection'));
const constants = require(path.resolve('src/util/constants'));

let dao = {

  login: function(user, password, cb) {

    connection.getConnection(function(err, conn) {

      if(err) {
        cb(err);
      } else {
        conn.execute(constants.query.user.login,
          [user, password],
          {outFormat: oracledb.OBJECT},
          cb);
      }
    });

  },

  get: function(userId, cb) {

    connection.getConnection(function(err, conn) {

      if(err) {
        cb(err);
      } else {
        conn.execute(constants.query.user.get,
          [userId],
          {outFormat: oracledb.OBJECT},
          cb);
      }
    });

  },

  getAll: function(cb) {
      connection.getConnection(function(err, conn) {
        conn.execute(constants.query.user.getAll,
          {}, //no binds
          { outFormat: oracledb.OBJECT },
          cb);
      });

  },

  save: function(obj, cb) {
    connection.getConnection(function(err, conn) {

      if(err) {
        cb(err);
      } else {
        conn.execute(constants.query.user.save,
          [obj.USUARIO, obj.SENHA, obj.NOME, obj.ID],
          { autoCommit: true},
          cb);
      }

    });

  },

  update: function(obj, cb) {
    connection.getConnection(function(err, conn) {

      if(err) {
        cb(err);
      } else {
        conn.execute(constants.query.user.update,
          [obj.USUARIO, obj.SENHA, obj.NOME, obj.ID],
          { autoCommit: true },
          cb);
      }

    });

  },

  remove: function(userId, cb) {
    connection.getConnection(function(err, conn) {

      if(err) {
        cb(err);
      } else {
        conn.execute(constants.query.user.remove,
          [userId],
          { autoCommit: true},
          cb);
      }

    });

  }

};
module.exports = dao;
