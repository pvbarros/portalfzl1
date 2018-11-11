angular.module('alurapic').controller('NoticiasController', function($scope, $http, $routeParams) {
	
	$scope.noticias = [];
    $scope.noticia = {};
	$scope.filtro = '';
	$scope.mensagem = '';
	$scope.confirma = '';
	
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
				$http.put('/noticia' + $scope.noticia._id, formData,{
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
			} //fecha else
		} //fecha if
	};
	
	$scope.remover = function(noticia) {

		$http.delete('/noticia' + noticia._id)
		.success(function() {
			var indiceNoticia = $scope.noticias.indexOf(noticia);
			$scope.noticias.splice(indiceNoticia, 1);
			$scope.mensagem = 'Notícia ' + noticia.titulo + ' excluída com sucesso';
		})
		.error(function(erro) {
			console.log(erro);
			$scope.mensagem = 'Não foi possível excluir a notícia ' + noticia.titulo;
		});
		$scope.confirma = bootbox.confirm("Operação realizada", function(result){
			console.log('Exclusão da notícia' + result);
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