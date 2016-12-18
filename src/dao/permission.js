'use strict';
const path = require('path');
const oracledb = require('oracledb');
const connection  = require(path.resolve('src/util/pureConnection'));
const constants = require(path.resolve('src/util/constants'));

let dao = {

  get: function(permissionId, cb) {

    connection.getConnection(function(err, conn) {

      if(err) {
        cb(err);
      } else {
        conn.execute(constants.query.permission.get,
          [permissionId],
          {outFormat: oracledb.OBJECT},
          cb);
      }
    });

  },

  getAll: function(cb) {
      connection.getConnection(function(err, conn) {
        conn.execute(constants.query.permission.getAll,
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
        conn.execute(constants.query.permission.save,
          [obj.CODIGO, obj.NOME],
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
        conn.execute(constants.query.permission.update,
          [obj.NOME, obj.CODIGO],
          { autoCommit: true },
          cb);
      }

    });

  },

  remove: function(permissionId, cb) {
    connection.getConnection(function(err, conn) {

      if(err) {
        cb(err);
      } else {
        conn.execute(constants.query.permission.remove,
          [permissionId],
          { autoCommit: true},
          cb);
      }

    });

  }

};


module.exports = dao;
