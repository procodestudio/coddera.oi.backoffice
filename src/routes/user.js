'use strict';
module.exports = function(app) {
  const path = require('path');
  const constants = require(path.resolve('src/util/constants'));
  const userController = require(path.resolve('src/controller/user'));
  const router = require('express').Router();

  router.get('/api/user/:userId', userController.get);
  router.get('/api/user', userController.getAll);
  router.post('/api/user', userController.save);
  router.post('/api/user/login', userController.login);
  router.delete('/api/user/:userId', userController.remove);
  router.put('/api/user/:id', userController.update);

  app.use(router);

};
