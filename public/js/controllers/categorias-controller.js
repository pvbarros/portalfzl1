angular.module('portalfzl').controller('CategoriasController', function($scope, $http) {

	$http.get('/categorias')
		.success(function(categorias) {
		$scope.categorias = categorias;
	})
	.error(function(erro) {
		console.log(erro);
	});

});