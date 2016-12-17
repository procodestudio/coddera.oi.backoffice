'use strict';
const path = require('path');
const offerDao = require(path.resolve('src/dao/offer'));
const offerController = {


  get: function(req, res) {

    let offerId = req.params.offerId;

    offerDao.get(offerId, function(err, offers) {

      let result = {};

      if(err) {
        res.status(500).json(err);
      } else {

        if(offers.rows && offers.rows.length > 0) {
          result = offers.rows[0];
        }

        res.status(200).json(result);
      }

    });
  },

  getAll: function(req, res) {

    offerDao.getAll(function(err, offers) {

      if(err) {
        res.status(500).json(err);
      } else {
        res.status(200).json(offers.rows || [] );
      }

    });
  },

  save: function(req, res) {

    let offer = req.body;

    offerDao.save(offer, function(err, result) {

      if(err) {
        res.status(500).json(err);
      } else {
        res.status(200).json(result);
      }

    });

  },

  update: function(req, res) {

    let offer = req.body;
    let offerId = req.params.id;

    offer.ID = offerId;

    offerDao.update(offer, function(err, result) {

      if(err) {
        res.status(500).json(err);
      } else {
        res.status(200).json(result);
      }

    });

  },

  remove: function(req, res) {

    let offerId = req.params.offerId;

    offerDao.remove(offerId, function(err, result) {

      if(err) {
        res.status(500).json(err);
      } else {
        res.status(200).json(result);
      }

    });


  }

};

module.exports = offerController;
