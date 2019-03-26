const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const test = require('../controllers/util.controller');

describe('Utilities', function() {
	describe('Index page', function() {
		it('should render a response', function() {
			var req = {};

			res = {
				render: sinon.spy()
			};

			test.index_page(req, res);
			expect(res.render.calledOnce).to.equal(true);
		});
	});
});
