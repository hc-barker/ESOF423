const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const member = require('./member.model');

let ActivitySchema = new Schema(
		{
			name: {type: String, required: true, max: 100},
			members: [String]
		});

module.exports = mongoose.model('Activity', ActivitySchema);
