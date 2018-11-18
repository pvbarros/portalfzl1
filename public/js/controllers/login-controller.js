angular.module('portalfzl').controller('LoginController', function($scope, $http, $location, $ngBootbox) {

    $scope.usuario = {};
    $scope.mensagem = '';

    $scope.autenticar = function() {

        var usuario = $scope.usuario;

        $http.post('/autenticar', {login: usuario.login, senha: usuario.senha})
        .then(function() {
            $location.path('/');
        }, function(erro) {
            $scope.usuario = {};
            $scope.mensagem = 'Login/Senha incorretos';
        });
    };

    $scope.login = function (){

        $ngBootbox.prompt('Digite um texto')
        .then(function(){

        },
        function(){

        });
    };
});