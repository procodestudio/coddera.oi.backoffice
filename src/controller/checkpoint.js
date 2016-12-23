'use strict';
const path = require('path');
const serializeError = require('serialize-error');
const checkpointDao = require(path.resolve('src/dao/checkpoint'));
const checkpointController = {


  get: function(req, res) {

    let checkpointId = req.params.checkpointId;

    checkpointDao.get(checkpointId, function(err, checkpoints) {

      let result = {};

      if(err) {
        res.status(500).json(serializeError(err));
      } else {

        if(checkpoints.rows && checkpoints.rows.length > 0) {
          result = checkpoints.rows[0];
        }

        res.status(200).json(result);
      }

    });
  },

  getAll: function(req, res) {

    checkpointDao.getAll(function(err, checkpoints) {

      if(err) {
        res.status(500).json(serializeError(err));
      } else {
        res.status(200).json(checkpoints.rows || [] );
      }

    });
  },

  save: function(req, res) {

    let offer = req.body;

    checkpointDao.save(offer, function(err, result) {

      if(err) {
        res.status(500).json(serializeError(err));
      } else {
        res.status(200).json(result);
      }

    });

  },

  update: function(req, res) {

    let checkpoint = req.body;

    checkpoint.ID = req.params.id;

    checkpointDao.update(checkpoint, function(err, result) {

      if(err) {
        res.status(500).json(serializeError(err));
      } else {
        res.status(200).json(result);
      }

    });

  },

  remove: function(req, res) {

    let checkpointId = req.params.checkpointId;

    checkpointDao.remove(checkpointId, function(err, result) {

      if(err) {
        res.status(500).json(serializeError(err));
      } else {
        res.status(200).json(result);
      }

    });


  }

};

module.exports = checkpointController;
