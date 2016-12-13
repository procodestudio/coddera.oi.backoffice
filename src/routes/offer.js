'use strict';
module.exports = function(app) {
  const path = require('path');
  const constants = require(path.resolve('src/util/constants'));
  const offerController = require(path.resolve('src/controller/offer'));
  const router = require('express').Router();

  router.get('/api/offer', offerController.getAll);

  app.use(router);

};
