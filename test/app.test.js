const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const should = chai.should();
chai.use(chaiHttp);
const Tweets = require('../models/tweets');

describe('twitter statuses', ()=> {

    it('should list ALL tweets on /tweets GET', (done)=> {
        chai.request(server)
            .get('/tweets')
            .end(function (err, res) {
                res.should.have.status(200);
                res.body.should.be.a('array');
                if (res.body[0]) {
                    res.body[0].should.have.property('_id');
                    res.body[0].should.have.property('created_at');
                    res.body[0].should.have.property('tweet');
                }
                done();
            });
    });


    it('should add tweets to the document on /tweets GET', (done)=>{
        chai.request(server)
            .post('/tweets')
            .end(function (err, res) {
                res.should.have.status(200);
                res.body.should.be.a('array');
            });
        done();
    });

});