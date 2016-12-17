'use strict';
const path = require('path');
const oracledb = require('oracledb');
const connection  = require(path.resolve('src/util/pureConnection'));
const constants = require(path.resolve('src/util/constants'));

let dao = {

  get: function(offerId, cb) {

    connection.getConnection(function(err, conn) {

      if(err) {
        cb(err);
      } else {
        conn.execute(constants.query.offer.get,
          [offerId],
          {outFormat: oracledb.OBJECT},
          cb);
      }
    });

  },

  getAll: function(cb) {
      connection.getConnection(function(err, conn) {
        conn.execute(constants.query.offer.getAll,
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
        conn.execute(constants.query.offer.save,
          [obj.ID, obj.NOME, obj.DESCRICAO, obj.SCRIPT, obj.PRECO, obj.EXIBIR, obj.ID_PROGRAMA, obj.ID_BENEFICIO],
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
        conn.execute(constants.query.offer.update,
          [obj.NOME, obj.DESCRICAO, obj.SCRIPT, obj.PRECO, obj.EXIBIR, obj.ID_PROGRAMA, obj.ID_BENEFICIO, obj.ID],
          { autoCommit: true },
          cb);
      }

    });

  },

  remove: function(offerId, cb) {
    connection.getConnection(function(err, conn) {

      if(err) {
        cb(err);
      } else {
        conn.execute(constants.query.offer.remove,
          [offerId],
          { autoCommit: true},
          cb);
      }

    });

  }

};


module.exports = dao;
