const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const test = require('../controllers/util.controller');

const mockRequest = (sessionData) => {
	return {
		session: {data: sessionData },
	};
};

const mockResponse = () => {
	const res = {};
	res.status = sinon.stub().returns(res);
	res.json = sinon.stub().returns(res);
	return res;
};

describe('Utilities', function() {
	describe('Index page', function() {
		it('should render a response', function() {
			var req = {};
			var res = {};
			res.render = sinon.spy();

			test.index_page(req, res);
			expect(res.render.calledOnce).to.be.true;
			//expect(res.render.calledWithExactly('index.ejs')).to.be.true;
			//sinon.assert.calledWithExactly(res.render, '/index\.ejs/');
			
		});
	});

	describe('About page', function() {
		it('should render a response', function() {
			var req = {};

			res = {
				render: sinon.spy()
			};

			test.about_page(req, res);
			expect(res.render.calledOnce).to.equal(true);
		});
	});

});
