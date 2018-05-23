const chai = require('chai');
const should = chai.should();
const assert = require('chai').assert;

const request = require('supertest');

const index = require('../index');

//body parser
// const bodyParser = require('body-parser');
// index.use(bodyParser.urlencoded(
//     {
//         extended: false
//     }));

describe('Index', function()
{
    it('Index should return port as undefined', function()
    {
        assert.equal(index(), 'undefined');
    });

    it('Should be status 200', () => 
    {
        request(index)
        .get('/')
        .end((err, res) => {
            res.status.should.equal(200);
            done(err);
        });
    });
});



