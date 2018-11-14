angular.module('alurapic').controller('DestaquesController', function($scope, $http, $routeParams, $ngBootbox) {

    $scope.destaque = {};
    $scope.mensagem = '';
    $scope.destaques = [];
    $scope.filtro = '';

    $http.get('/destaques')
      .success(function(retorno) {
        console.log(retorno);
        $scope.destaques = retorno;
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
        
        if($scope.formulario.$valid){
            if($scope.destaque._id){
                $http.put('/destaque', + $scope.destaque._id, formData,{
                    tranformRequest: angular.identity,
                    headers:{
                        'Content-Type' : undefined
                    }
                })
                .success(function(){
                    $scope.mensagem = 'Destaque atualizado com sucesso';
                })
                .error(function(erro) {
                    console.log(erro);
                    $scope.mensagem = 'Não foi possível atualizar o destaque';
                });
            } else {
                $http.post('/destaque', formData,{
                    tranformRequest: angular.identity,
                    headers:{
                        'Content-Type' : undefined
                    }
                })
                .success(function(){
                    $scope.mensagem = 'Destaque incluído com suceso';
                })
                .error(function(erro) {
                    console.log(erro);
                    $scope.mensagem = 'Não foi possível incluir o destaque';
                });
            }
        }
    };

    $scope.remover = function(destaque){

		$ngBootbox.confirm('Deseja realmente excluir o destaque ' +destaque.titulo+ '?')
        .then(function() {
			$http.delete('/destaque' + destaque._id)
			.success(function() {
				$scope.destaques.splice($scope.destaques.indexOf(destaque), 1);
				$scope.mensagem = 'Destaque ' + destaque.titulo + ' excluído com sucesso';
			})
			.error(function(erro) {
				console.log(erro);
				$scope.mensagem = 'Não foi possível excluir o destaque ' + destaque.titulo;
			});
        },
        function() {
          console.log('Operação de exclusão cancelada');
        });
    }; 
});