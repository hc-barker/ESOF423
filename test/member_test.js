const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const test = require('../controllers/member.controller');

const mockRequest = (sessionData, body) => ({
	session: {data: sessionData},
	body,
});

describe('Members', function() {
	describe('Member create page', function() {
		it('renders a response with no activities', function() {
			var server = require('../server');
			//var spy = sinon.spy(ejs, '__express');
			var req = mockRequest(
					{},
					{activities: ""}
					);

			res = {};
			res.render = sinon.spy();

			test.member_create_page(req, res);
			//expect(res.render.calledOnce).to.be.true;
			expect(spy.calledWithMatch(/\/create_member\.ejs%/)).to.be.true;

			//spy.restore();

			done();
		});
	});
});
