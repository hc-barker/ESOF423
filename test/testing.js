exports['tests'] = function(assert) {
	assert.equal(3 + 2, 5, 'assert pass')
}

if(module == require.main) require('test').run(exports)
