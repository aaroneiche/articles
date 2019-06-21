var mocha = require('mocha');
var chai = require('chai');
var should = chai.should();
var fs = require("fs");

var chaiHttp = require('chai-http');
var server = require('../index');


/* 
Things we need to test (per spec):
GET article
Accepts ID, returns object {id, title, date, body, categories}

POST article
Creates article with title, body, categories, returns id, datetime
*/

chai.use(chaiHttp);

describe("API Routes", ()=>{

    it("Fails to get an Article by ID", ()=>{
        chai.request(server)
        .get("/articles/1")
        .send()
        .end(function(err,res){
          res.should.be.json;
          res.should.have.status(404);
          done();
        })
    });

    it("Gets an Article by ID", ()=>{
        chai.request(server)
        .get("/articles/1")
        .send()
        .end(function(err,res){
          res.should.be.json;
          res.should.have.status(200);
          res.body.id.should.equal(1);
          done();
        })
    });

})