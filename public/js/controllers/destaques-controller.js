angular.module('alurapic').controller('DestaquesController', function($scope, $http) {

    $scope.destaque = {};
    $scope.mensagem = '';
    $scope.images = [];


    $http.get('/destaques')
      .success(function(retorno) {
        console.log(retorno);
        $scope.images = retorno;
    })
      .error(function(erro) {
        console.log(erro);
    });  

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

    $scope.editar = function(destaque) {

        console.log(destaque);
        

        /*
        $http.get('/destaques' + destaque._id)
		.success(function() {

			console.log('Leia a notícia "' + noticias.titulo + '" na íntegra');
		})
		.error(function(erro) {
			console.log(erro);
			console.log('Não foi possível abrir a notícia "' + noticias.titulo + '"');
        });
        */





    };

    });