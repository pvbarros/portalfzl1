angular.module('alurapic').controller('NoticiaPostController', function($scope, $http, $routeParams) {
	
	$scope.noticia = [];

	$http.get('/noticias' + $routeParams.noticiaId)
	.success(function(retorno) {
		console.log(retorno);
		$scope.noticia = retorno;
	})
	.error(function(erro) {
		console.log(erro);
	});
});