const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema(
		{
			username: {type: String, required: true, max:100},
			password: {type: String, required: true}
		});

module.exports = mongoose.model('User', UserSchema);
