'use strict';
const path = require('path');
const oracledb = require('oracledb');
const connection  = require(path.resolve('src/util/pureConnection'));
const constants = require(path.resolve('src/util/constants'));

let dao = {

  get: function(checkpointId, cb) {

    connection.getConnection(function(err, conn) {

      if(err) {
        cb(err);
      } else {
        conn.execute(constants.query.checkpoint.get,
          [checkpointId],
          {outFormat: oracledb.OBJECT},
          cb);
      }
    });

  },

  getAll: function(cb) {
      connection.getConnection(function(err, conn) {
        conn.execute(constants.query.checkpoint.getAll,
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
        conn.execute(constants.query.checkpoint.save,
          [obj.ID, obj.NOME, obj.STATUS, obj.TIME_OUT],
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
        conn.execute(constants.query.checkpoint.update,
          [obj.ID, obj.NOME, obj.STATUS, obj.TIME_OUT],
          { autoCommit: true },
          cb);
      }

    });

  },

  remove: function(checkpointId, cb) {
    connection.getConnection(function(err, conn) {

      if(err) {
        cb(err);
      } else {
        conn.execute(constants.query.checkpoint.remove,
          [checkpointId],
          { autoCommit: true},
          cb);
      }

    });

  }

};


module.exports = dao;
