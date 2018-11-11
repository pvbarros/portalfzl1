var mongoose = require('mongoose');

var schema = new mongoose.Schema({

	titulo: {
		type: String,
		required: true
	},
  conteudo: {
		type: String,
		required: true
	}

},
{
    versionKey: false
});
mongoose.model('Geral', schema);
