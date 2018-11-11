var mongoose = require('mongoose');

var schema = new mongoose.Schema({

	nome: {
		type: Date,
		required: true
	},
	senha: {
        type: String,
        required: true
	},

},
{
    versionKey: false
});
mongoose.model('Usuario', schema);
