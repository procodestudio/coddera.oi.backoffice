'use strict';
module.exports = function(app) {
  const path = require('path');
  const constants = require(path.resolve('src/util/constants'));
  const clientRefusalController = require(path.resolve('src/controller/clientRefusal'));
  const router = require('express').Router();

  router.get('/api/clientRefusal/:id', clientRefusalController.get);
  router.get('/api/clientRefusal', clientRefusalController.getAll);
  router.post('/api/clientRefusal', clientRefusalController.save);
  router.delete('/api/clientRefusal/:id', clientRefusalController.remove);
  router.put('/api/clientRefusal/:id', clientRefusalController.update);

  app.use(router);

};
