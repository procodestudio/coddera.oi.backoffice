'use strict';
module.exports = function(app) {
  const path = require('path');
  const constants = require(path.resolve('src/util/constants'));
  const permissionUserController = require(path.resolve('src/controller/permissionUser'));
  const router = require('express').Router();

  router.get('/api/permissionUser/:userId', permissionUserController.getPermissionsByUser);
  router.post('/api/permissionUser', permissionUserController.save);
  router.delete('/api/permissionUser/:permissionCode/:userId', permissionUserController.remove);

  app.use(router);

};
