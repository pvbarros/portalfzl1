angular.module('portalfzl').controller('NoticiasController', function($scope, $http, $routeParams, $ngBootbox) {
	
	$scope.noticias = [];
    $scope.noticia = {};
	$scope.filtro = '';
	$scope.mensagem = '';
	
	$http.get('/noticias')
	.success(function(retorno) {
		console.log(retorno);
		$scope.noticias = retorno;
	})
	.error(function(erro) {
		console.log(erro);
	});

	if($routeParams.noticiaId){
		$http.get('/noticias' + $routeParams.noticiaId)
		.success(function(noticia) {
			$scope.noticia = noticia;
		})
		.error(function(erro) {
			console.log(erro);
			$scope.mensagem = 'Notícia alterada com sucesso';
		});
	}

	$scope.submeter = function() {
		
		var formData = new FormData;
			
		for (key in $scope.noticia){
			formData.append(key, $scope.noticia[key]);
			console.log( $scope.noticia[key]);            
		}
		
		var file = $('#file')[0].files[0];
		formData.append('image',file);   
		
		console.log(formData.image);

		if($scope.formulario.$valid){
			if($scope.noticia._id){
				$http.put('/noticia' + formData._id, formData,{
					tranformRequest: angular.identity,
					headers:{
						'Content-Type' : undefined
					}
				})
				.success(function() {
					$scope.mensagem = 'Notícia ' + $scope.noticia.titulo + ' atualizada com sucesso';
				})
				.error(function(erro) {
					console.log(erro);
					$scope.mensagem = 'Não foi possível atualizar a notícia ' + $scope.noticia.titulo;
				});
			} else {
				$http.post('/noticia', formData,{
					tranformRequest: angular.identity,
					headers:{
						'Content-Type' : undefined
					}
				})
				.success(function() {
					$scope.noticia = {};
					$scope.mensagem = 'Notícia incluída com sucesso';
				})
				.error(function(erro) {
					console.log(erro);
					$scope.mensagem = 'Não foi possível incluir a notícia';
				});				 
			}
		}
	};

	$scope.remover = function(noticia){

		$ngBootbox.confirm('Deseja realmente excluir a notícia ' +noticia.titulo+ '?')
        .then(function() {
			$http.delete('/noticia' + noticia._id)
			.success(function() {
				$scope.noticias.splice($scope.noticias.indexOf(noticia), 1);
				$scope.mensagem = 'Notícia ' + noticia.titulo + ' excluída com sucesso';
			})
			.error(function(erro) {
				console.log(erro);
				$scope.mensagem = 'Não foi possível excluir a notícia ' + noticia.titulo;
			});
        },
        function() {
          console.log('Operação de exclusão cancelada');
        });
    };

	$scope.verMais = function(noticia) {
		
		$http.get('/noticias' + noticia._id)
		.success(function() {
			console.log('Leia a notícia na íntegra');
		})
		.error(function(erro) {
			console.log(erro);
			console.log('Não foi possível abrir a notícia');
		});
	};
});