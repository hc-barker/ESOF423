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
			var req = mockRequest(
					{},
					{activities: ""}
					);

			res = {
				render: sinon.spy()
			};

			test.member_create_page(req, res);
			expect(res.render.calledOnce).to.equal(true);
		});
	});
});
