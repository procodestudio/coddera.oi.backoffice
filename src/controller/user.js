'use strict';
const path = require('path');
const userDao = require(path.resolve('src/dao/user'));
const userController = {


  login: function(req, res) {

    let loginData = req.body;

    userDao.login(loginData.USUARIO, loginData.SENHA, function(err, users) {

      let result = {};

      if(err) {
        res.status(500).json(err);
      } else {

        if(users.rows && users.rows.length > 0) {
          result = users.rows[0];
        }

        res.status(200).json(result);
      }

    });

  },

  get: function(req, res) {

    let userId = req.params.userId;

    userDao.get(userId, function(err, users) {

      let result = {};

      if(err) {
        res.status(500).json(err);
      } else {

        if(users.rows && users.rows.length > 0) {
          result = users.rows[0];
        }

        res.status(200).json(result);
      }

    });
  },

  getAll: function(req, res) {

    userDao.getAll(function(err, users) {

      if(err) {
        res.status(500).json(err);
      } else {
        res.status(200).json(users.rows || [] );
      }

    });
  },

  save: function(req, res) {

    let user = req.body;

    userDao.save(user, function(err, result) {

      if(err) {
        res.status(500).json(err);
      } else {
        res.status(200).json(result);
      }

    });

  },

  update: function(req, res) {

    let user = req.body;
    let userId = req.params.id;

    user.ID = userId;

    userDao.update(user, function(err, result) {

      if(err) {
        res.status(500).json(err);
      } else {
        res.status(200).json(result);
      }

    });

  },

  remove: function(req, res) {

    let userId = req.params.userId;

    userDao.remove(userId, function(err, result) {

      if(err) {
        res.status(500).json(err);
      } else {
        res.status(200).json(result);
      }

    });


  }

};

module.exports = userController;
