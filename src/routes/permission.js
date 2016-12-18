'use strict';
module.exports = function(app) {
  const path = require('path');
  const constants = require(path.resolve('src/util/constants'));
  const permissionController = require(path.resolve('src/controller/permission'));
  const router = require('express').Router();

  router.get('/api/permission/:permissionId', permissionController.get);
  router.get('/api/permission', permissionController.getAll);
  router.post('/api/permission', permissionController.save);
  router.delete('/api/permission/:permissionId', permissionController.remove);
  router.put('/api/permission/:id', permissionController.update);

  app.use(router);

};
