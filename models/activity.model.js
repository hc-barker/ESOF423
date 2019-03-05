const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Member = require('./member.model');

let ActivitySchema = new Schema(
		{
			name: {type: String, required: true, max: 100},
			members: [Member]
		});

module.exports = mongoose.model('Activity', ActivitySchema);
