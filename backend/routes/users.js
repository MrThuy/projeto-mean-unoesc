var express = require('express');
var router = express.Router();

var UserModel = require('../models/users');

/* Listar users listing. */
router.get('/', function(req, res, next) {
  UserModel.find({}).exec((err, response) => {
    res.json(response);
  });
});
/* Pegar user */
router.get('/:id', function(req, res, next) {
  UserModel.findOne({_id: req.params.id}).exec((err, response) => {
    res.json(response);
  });
});
/* Criar user */
router.post('/', function(req, res, next) {
  var newUser = new UserModel(req.body);
  newUser.criado_em = new Date();
  newUser.alterado_em = new Date();
  newUser.save(err => {
    if (err) {
      return res.status(400).json({
        message: 'Erro ao criar usuário'
      });
    }
    res.json({message:  `Usuário ${newUser.nome} criado`});
  });
});

/* Alterar user */
router.put('/:id', function(req, res) {
  var user = req.body;
  user.alterado_em = new Date();
  UserModel.update({_id: req.params.id}, user, function(err, data) {
    if (err) {
      return res.status(400).json({message: 'Erro ao alterar usuário'});
    }
    res.json({message: `Usuário ${user.nome} alterado`});
  });
});

/* Apagar user */
router.delete('/:id', function(req, res) {
  UserModel.remove({_id: req.params.id}, function(err, data) {
    if (err) {
      return res.status(404).json({message: 'Usuário'});
    }
    res.json({message: 'Usuário removido'});
  });
});

/* Buscar users */
router.get('/search/:field/:term', function(req, res, next) {
  query = {};
  query[req.params.field] = new RegExp(req.params.term, 'i');
  UserModel.find(query).exec((err, results) => {
    res.json(results);
  });
});

module.exports = router;
