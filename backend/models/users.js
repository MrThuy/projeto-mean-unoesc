var mongoose = require('mongoose');

var schema = mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  idade: Number,
  ativo: Boolean,
  criado_em: Date,
  alterado_em: Date
});

var model = mongoose.model('pessoas', schema);

module.exports = model;