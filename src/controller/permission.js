'use strict';
const path = require('path');
const permissionDao = require(path.resolve('src/dao/permission'));
const serializeError = require('serialize-error');
const permissionController = {


  get: function(req, res) {

    let permissionId = req.params.permissionId;

    permissionDao.get(permissionId, function(err, permissions) {

      let result = {};

      if(err) {
        res.status(500).json(serializeError(err));
      } else {

        if(permissions.rows && permissions.rows.length > 0) {
          result = permissions.rows[0];
        }

        res.status(200).json(result);
      }

    });
  },

  getAll: function(req, res) {

    permissionDao.getAll(function(err, permissions) {

      if(err) {
        res.status(500).json(serializeError(err));
      } else {
        res.status(200).json(permissions.rows || [] );
      }

    });
  },

  save: function(req, res) {

    let permission = req.body;

    permissionDao.save(permission, function(err, result) {

      if(err) {
        res.status(500).json(serializeError(err));
      } else {
        res.status(200).json(result);
      }

    });

  },

  update: function(req, res) {

    let permission = req.body;
    let permissionId = req.params.id;

    permission.ID = permissionId;

    permissionDao.update(permission, function(err, result) {

      if(err) {
        res.status(500).json(serializeError(err));
      } else {
        res.status(200).json(result);
      }

    });

  },

  remove: function(req, res) {

    let permissionId = req.params.permissionId;

    permissionDao.remove(permissionId, function(err, result) {

      if(err) {
        res.status(500).json(serializeError(err));
      } else {
        res.status(200).json(result);
      }

    });


  }

};

module.exports = permissionController;
