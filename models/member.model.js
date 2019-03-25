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
	ethnicity: {type: String},
	gender: {type: String},
	numinhousehold: {type: Number},
	caregiver: {type: Boolean},
	income: {type: Number},
	disabled: {type: Boolean,required:true},
	veteran: {type: Boolean, required:true},
	spouseover60: {type: Boolean},
	otherover60: {type: Boolean},
	activities: [String]
});

module.exports = mongoose.model('Member', MemberSchema);
