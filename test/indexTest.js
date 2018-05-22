const assert = require('chai').assert;

const index = require('../index');

describe('Index', function()
{
    it('Index should return port as undefined', function()
    {
        assert.equal(index(), 'undefined');
    });
});