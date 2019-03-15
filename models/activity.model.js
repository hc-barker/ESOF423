const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ActivitySchema = new Schema(
		{
			name: {type: String, required: true, max: 100},
		});

module.exports = mongoose.model('Activity', ActivitySchema);
