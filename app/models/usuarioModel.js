var mongoose = require('mongoose');

var schema = new mongoose.Schema({

	login: {
		type: String,
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
