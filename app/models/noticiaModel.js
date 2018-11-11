var mongoose = require('mongoose');

var schema = new mongoose.Schema({

	titulo: {
		type: String,
		required: true
	},
	url: {
		type: String,
		required: true
	},
 	 conteudo: {
		type: String,
		required: true
	},
	data: {
		type: Date,
		required: true
	},
	categoria: {
		type: String
	},

},
{
    versionKey: false
});
mongoose.model('Noticia', schema);
