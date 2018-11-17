angular.module('alurapic', ['minhasDiretivas','ngAnimate', 'ngRoute', 
	'trixDemo', 'angularUtils.directives.dirPagination', 'summernote', 
		'ngBootbox'])
	.config(function($routeProvider, $locationProvider) {

		$locationProvider.html5Mode(true);

		$routeProvider.when('/', {
			templateUrl: 'partials/principal.html',
			controller: 'NoticiasController'
		});

		$routeProvider.when('/destaque', {
			templateUrl: 'partials/principal.html',
			controller: 'DestaquesController'
		});

		$routeProvider.when('/destaques/new', {
			templateUrl: 'partials/gerenciador-destaques.html',
			controller: 'DestaquesController'
		});

		$routeProvider.when('/destaques/edit/:destaqueId', {
			templateUrl: 'partials/gerenciador-destaques.html',
			controller: 'DestaquesController'
		});

		$routeProvider.when('/gerenciar/destaques', {
			templateUrl: 'partials/crud-destaques.html',
			controller: 'DestaquesController'
		});

		$routeProvider.when('/noticias/new', {
			templateUrl: 'partials/gerenciador-noticias.html',
			controller: 'NoticiasController'
		});

		$routeProvider.when('/noticias/edit/:noticiaId', {
			templateUrl: 'partials/gerenciador-noticias.html',
			controller: 'NoticiasController'
		});

		$routeProvider.when('/gerenciar/noticias', {
			templateUrl: 'partials/crud-noticias.html',
			controller: 'NoticiasController'
		});

		$routeProvider.when('/noticias/antigas', {
			templateUrl: 'partials/noticias-antigas.html',
			controller: 'NoticiasController'
		});

		$routeProvider.when('/noticia/post/:noticiaId', {
			templateUrl: 'partials/noticias-post.html',
			controller: 'NoticiaPostController'
		});

		$routeProvider.when('/login', {
			templateUrl: 'partials/login.html',
			controller: 'LoginController'
            
        });

		$routeProvider.otherwise({redirectTo: '/'});

	});