'use strict';
const path = require('path');
const offerDao = require(path.resolve('src/dao/offer'));
const offerController = {

  getAll: function(req, res) {

    offerDao.getAll().then(function(offers) {
      res.status(200).json(offers);
    }).catch(function(error) {
      res.status(500).json(error);
    });
  }

};

module.exports = offerController;
