'use strict';
const path = require('path');
const serializeError = require('serialize-error');
const clientRefusalDao = require(path.resolve('src/dao/clientRefusal'));
const clientRefusalController = {

  get: function(req, res) {

    let id = req.params.id;

    clientRefusalDao.get(id, function(err, items) {

      let result = {};

      if(err) {
        res.status(500).json(serializeError(err));
      } else {

        if(items.rows && items.rows.length > 0) {
          result = items.rows[0];
        }

        res.status(200).json(result);
      }

    });
  },

  getAll: function(req, res) {

    clientRefusalDao.getAll(function(err, items) {

      if(err) {
        res.status(500).json(serializeError(err));
      } else {
        res.status(200).json(items.rows || [] );
      }

    });
  },

  save: function(req, res) {

    let item = req.body;

    clientRefusalDao.save(item, function(err, result) {

      if(err) {
        res.status(500).json(serializeError(err));
      } else {
        res.status(200).json(result);
      }

    });

  },

  update: function(req, res) {

    let item = req.body;
    let itemId = req.params.id;

    item.ID = itemId;

    clientRefusalDao.update(item, function(err, result) {

      if(err) {
        res.status(500).json(serializeError(err));
      } else {
        res.status(200).json(result);
      }

    });

  },

  remove: function(req, res) {

    let id = req.params.id;

    clientRefusalDao.remove(id, function(err, result) {

      if(err) {
        res.status(500).json(serializeError(err));
      } else {
        res.status(200).json(result);
      }

    });


  }

};

module.exports = clientRefusalController;
