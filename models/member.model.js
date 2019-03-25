const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let MemberSchema = new Schema({
	firstname: {type: String, required: true, max:100},
	middlename: {type: String, required: true, max:100},
	lastname: {type: String, required: true, max:100},
	birthdate: {type: Date, required: true},
	startdate: {type: Date, required: true},
	clientID: {type: Number, required: true},
	phone: {type: Number},
	mailingaddr: {type: String, required: true},
	mailingcity: {type: String, required: true},
	mailingstate: {type: String, required: true},
	mailingzip: {type: Number, required: true},
	physaddr: {type: String},
	physcity: {type: String},
	physstate: {type: String},
	physzip: {type: Number},
	race: [String],
	ethnicity: {String},
	gender: {String},
	numinhousehold: {Number},
	caregiver: {Boolean},
	income: {String},
	disabled: {Boolean},
	veteran: {Boolean},
	spouseover60: {Boolean},
	otherover60: {Boolean},
	activities: [String]
});

module.exports = mongoose.model('Member', MemberSchema);
