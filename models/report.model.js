const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ReportSchema = new Schema(
		{
			name: {type: String, required: true, trim:true, max:100}
		});

module.exports = mongoose.model('Report', ReportSchema);
