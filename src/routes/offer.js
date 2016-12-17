'use strict';
module.exports = function(app) {
  const path = require('path');
  const constants = require(path.resolve('src/util/constants'));
  const offerController = require(path.resolve('src/controller/offer'));
  const router = require('express').Router();

  router.get('/api/offer/:offerId', offerController.get);
  router.get('/api/offer', offerController.getAll);
  router.post('/api/offer', offerController.save);
  router.delete('/api/offer/:offerId', offerController.remove);
  router.put('/api/offer/:id', offerController.update);

  app.use(router);

};
