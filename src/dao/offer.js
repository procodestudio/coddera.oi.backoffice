'use strict';
const path = require('path');
const connection  = require(path.resolve('src/util/connection'));

// const offerRepository = connection.getRepository('Offer');

let dao = {

  getAll: function() {
      connection.then(function(conn) {
        return conn.getRepository('OFERTA').find();
      });
      //return offerRepository.find();

  }

};


module.exports = dao;
