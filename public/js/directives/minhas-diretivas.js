angular.module('minhasDiretivas', [])
	.directive('minhaFoto', function() {

        var ddo = {};

        ddo.restrict = "AE";

        ddo.scope = {
            titulo: '@',
            url: '@'
        };

        ddo.template = '<img class="img-responsive center-block" src="{{url}}" alt="{{titulo}}">';

        return ddo;
    })
    /*.directive('meusDestaques', function() {

        var ddo = {};

        ddo.scope = {
            titulo: '@',
            subtitulo: '@',
            link: '@',
            url: '@'
        };

        ddo.templateUrl = 'js/directives/meus-destaques.html';

        return ddo;
    })*/;
