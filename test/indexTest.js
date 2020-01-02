const chai = require('chai');
const should = chai.should();
const assert = require('chai').assert;

const request = require('supertest');

const index = require('../index');

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
            // done(err);
        });
    });
});


describe('Get Paper code', () => {

    it('should post paper code', () => {
      request(index)
        .post('/post')
        .type('form')
        .send({ 
            PaperName: "Programming 2"
          })
        .end((err, res) => {
          res.body.should.be.json;
          res.body.should.equal({
            "speech": "The code for the paper is COMP503",
            "displayText": "The code for the paper is COMP503",
            "source": "getPaperCode"
        });
          res.status.should.equal(200);
      });
    });
  });




