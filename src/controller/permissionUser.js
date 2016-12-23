'use strict';
const path = require('path');
const R = require('ramda');
const permissionUserDao = require(path.resolve('src/dao/permissionUser'));
const serializeError = require('serialize-error');
const permissionUserController = {


  getPermissionsByUser: function(req, res) {

    let userId = req.params.userId;

    permissionUserDao.getPermissionsByUser(userId, function(err, permissions) {

      let result = [];

      if(err) {
        res.status(500).json(serializeError(err));
      } else {

        if(permissions.rows && permissions.rows.length > 0) {
          result =  R.pluck('CODIGO_PERMISSAO')(permissions.rows);
        }

        res.status(200).json(result);
      }

    });
  },

  save: function(req, res) {

    let permissionUser = req.body;

    permissionUserDao.save(permissionUser, function(err, result) {

      if(err) {
        res.status(500).json(serializeError(err));
      } else {
        res.status(200).json(result);
      }

    });

  },

  remove: function(req, res) {

    let permissionCode = req.params.permissionCode;
    let userId = req.params.userId;

    permissionUserDao.remove(permissionCode, userId, function(err, result) {

      if(err) {
        res.status(500).json(serializeError(err));
      } else {
        res.status(200).json(result);
      }

    });


  }

};

module.exports = permissionUserController;
