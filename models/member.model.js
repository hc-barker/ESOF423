const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ActivitySchema = new Schema({ activity: String });

let MemberSchema = new Schema({
	firstname: {type: String, required: true, max:100},
	lastname: {type: String, required: true, max:100},
	birthdate: {type: Date, required: true},
	activities: {type: Array, "default" : []}
});

module.exports = mongoose.model('Member', MemberSchema);
