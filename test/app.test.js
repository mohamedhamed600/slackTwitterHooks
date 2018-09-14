const chai = require('chai');
let expect = require('chai').expect;
const chaiHttp = require('chai-http');
const server = require('../app');
const should = chai.should();
chai.use(chaiHttp);
const Tweets = require('../models/tweets');
var sinon = require('sinon');
const services = require('../services');

describe('twitter statuses',  ()=> {
    it('calls the original function', async function () {
        const req = {   

        }, res={
            status:sinon.spy(),
            send:sinon.spy()
        }
        var stub = sinon.stub(Tweets,'find').callsFake(function(){
            return {a:1,b:2}
        })
        stub();
        try {
            await services.getAllTweets(req,res)
            expect(res.status.args[0][0]).to.be.equals(200)
            expect(res.send.args[0][0]).to.be.haveOwnProperty('a')
            expect(res.send.args[0][0]).to.be.haveOwnProperty('b')            
        } catch (error) {
            expect.fail({},{},error);
        } 
        stub.restore()
    });

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