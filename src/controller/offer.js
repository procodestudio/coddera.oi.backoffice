'use strict';
const path = require('path');
const offerDao = require(path.resolve('src/dao/offer'));
const offerController = {

  getAll: function(req, res) {

    offerDao.getAll(function(err, offers) {

      if(err) {
        res.status(500).json(err);
      } else {
        res.status(200).json(offers.rows || [] );
      }

    });
  }

};

module.exports = offerController;
