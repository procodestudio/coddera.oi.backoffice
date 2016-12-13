'use strict';
const path = require('path');
const connection  = require(path.resolve('src/util/connection'));

// const offerRepository = connection.getRepository('Offer');

let dao = {

  getAll: function() {
      return connection.getRepository('Offer').find();
      //return offerRepository.find();

  }

};


module.exports = dao;
