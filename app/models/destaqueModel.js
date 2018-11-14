var mongoose = require('mongoose');

var schema = new mongoose.Schema({

	titulo: {
		type: String,
		required: true
	},
  	subtitulo: {
		type: String,
		required: true
	},
	data: {
		type: Date,
		required: true
	},
  	url: {
		type: String,
		required: true
	},
	link: {
		type: String
	}

},
{
    versionKey: false
});
mongoose.model('Destaque', schema);
