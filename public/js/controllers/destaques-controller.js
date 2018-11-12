angular.module('alurapic').controller('DestaquesController', function($scope, $http, $routeParams) {

    $scope.destaque = {};
    $scope.mensagem = '';
    $scope.images = [];
    $scope.filtro = '';

    $http.get('/destaques')
      .success(function(retorno) {
        console.log(retorno);
        $scope.images = retorno;
    })
      .error(function(erro) {
        console.log(erro);
    });

    if($routeParams.destaqueId){
        $http.get('/destaques' + $routeParams.destaqueId)
        .success(function(destaque) {
            $scope.destaque = destaque;
        })
        .error(function(erro) {
            console.log(erro);
            $scope.mensagem = 'Notícia alterada com sucesso';
        });
    }

    $scope.submeter = function() {

        var formData = new FormData;

        for (key in $scope.destaque){
            formData.append(key, $scope.destaque[key]);
            console.log( $scope.destaque[key]);            
        }

        var file = $('#file')[0].files[0];
        formData.append('image',file);

        console.log(formData);
    
        $http.post('/destaque', formData,{
            tranformRequest: angular.identity,
            headers:{
                'Content-Type' : undefined
            }

        }).then(function(res){

        });

        
        /*if ($scope.formulario.$valid) {

            
        }
        */
    };
});