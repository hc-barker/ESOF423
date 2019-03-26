const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const test = require('../controllers/activity.controller');

describe('Activities', function() {

	describe('Create Activity Page', function() {
		it('should render a response', function() { 
			var req = {};

			res = {
				render: sinon.spy()
			};

			test.activity_create_page(req, res);
			expect(res.render.calledOnce).to.equal(true);
		});
	});

});
