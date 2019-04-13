const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const test = require('../controllers/user.controller');

const mockRequest = (sessionData, body) => ({
	session: {data: sessionData},
	body,
});	

describe('Users', function() {
	describe('User create page', function() {
		it('renders a responso', function() {
			var req = mockRequest(
					{username: "test"},
					{}
					);

			var res = {};
			res.render = sinon.spy();

			test.user_create(req, res);

			expect(res.render.calledOnce).to.be.false;
		});
	});

	describe('List user page', function() {
		it('renders a respons', function() {
			var req = mockRequest(
					{username: "test"},
					{}
					);

			var res = {};
			res.render = sinon.spy();

			test.list_users(req, res);

			expect(res.render.calledOnce).to.be.false;
		});
	});
});
