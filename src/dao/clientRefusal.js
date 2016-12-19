'use strict';
const path = require('path');
const oracledb = require('oracledb');
const connection  = require(path.resolve('src/util/pureConnection'));
const constants = require(path.resolve('src/util/constants'));

let dao = {

  get: function(id, cb) {

    connection.getConnection(function(err, conn) {

      if(err) {
        cb(err);
      } else {
        conn.execute(constants.query.clientRefusal.get,
          [id],
          {outFormat: oracledb.OBJECT},
          cb);
      }
    });

  },

  getAll: function(cb) {
      connection.getConnection(function(err, conn) {

        if(err) {
          cb(err);
        } else {
          conn.execute(constants.query.clientRefusal.getAll,
            {}, //no binds
            { outFormat: oracledb.OBJECT },
            cb);
        }

      });

  },

  save: function(obj, cb) {
    connection.getConnection(function(err, conn) {

      if(err) {
        cb(err);
      } else {
        conn.execute(constants.query.clientRefusal.save,
          [obj.ID, obj.UCID, obj.RECUSA],
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
        conn.execute(constants.query.clientRefusal.update,
          [obj.UCID, obj.RECUSA, obj.ID],
          { autoCommit: true },
          cb);
      }

    });

  },

  remove: function(id, cb) {
    connection.getConnection(function(err, conn) {

      if(err) {
        cb(err);
      } else {
        conn.execute(constants.query.clientRefusal.remove,
          [id],
          { autoCommit: true},
          cb);
      }

    });

  }

};
module.exports = dao;
