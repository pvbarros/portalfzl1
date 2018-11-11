var api = {}

api.lista = function(req, res) {

    var categorias = [
    	{ _id: 1, nome: 'visita técnica' }, 
        { _id: 2, nome: 'curso extracurricular' }, 
        { _id: 3, nome: 'estágio' },
        { _id: 4, nome: 'evento' },
        { _id: 5, nome: 'aviso secretaria' },
        { _id: 6, nome: 'aviso coordenação' },
        { _id: 7, nome: 'editais' },
        { _id: 8, nome: 'tcc' },
        { _id: 9, nome: 'outros' }
    ];

    res.json(categorias)

};

module.exports = api;