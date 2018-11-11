module.exports = function(app) {
	
	var api = app.api.categoriasApi;
	app.get('/categorias', api.lista);
};