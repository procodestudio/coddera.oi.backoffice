'use strict';
module.exports = function(app) {
  const path = require('path');
  const constants = require(path.resolve('src/util/constants'));
  const checkpointController = require(path.resolve('src/controller/checkpoint'));
  const router = require('express').Router();

  router.get('/api/checkpoint/:checkpointId', checkpointController.get);
  router.get('/api/checkpoint', checkpointController.getAll);
  router.post('/api/checkpoint', checkpointController.save);
  router.delete('/api/checkpoint/:checkpointId', checkpointController.remove);
  router.put('/api/checkpoint/:id', checkpointController.update);

  app.use(router);
};
