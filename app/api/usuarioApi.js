var mongoose = require('mongoose');

var model = mongoose.model('Usuario');
var api = {};

api.salva = function(req, res) {

  model.create(req,res)
		.then(function(node) {
			res.json(usuario);
		}, function(error) {
			console.log(error);
			res.sendStatus(500);
		});
};

api.atualiza = function(req, res) {

  		model.findByIdAndUpdate(req.params.id, req.body)
  		.then(function(usuario) {
  			res.send('conteudo atualizado');
  		}, function(error) {
  			console.log(error);
  			res.sendStatus(500);
  		})
};
api.lista = function(req, res) {

  model.find()
		.then(function(usuario) {
			res.json(usuario);
		}, function(error) {
			console.log(error);
			res.status(500).json(error);
		});

}

module.exports = function(app){
     return api;
 };
