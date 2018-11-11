angular.module('alurapic').controller('EditarNoticiasController', function($scope, $http) {

    $scope.noticia = {};

$scope.editar = function(){

    console.log("noticia");
    /*$http.get('/noticias' + noticia._id)
    .success(function() {
        console.log('Leia a notícia "' + noticias.titulo + '" na íntegra');
    })
    .error(function(erro) {
        console.log(erro);
        console.log('Não foi possível abrir a notícia "' + noticias.titulo + '"');
    });*/	
};
});