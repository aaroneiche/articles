var mocha = require('mocha');
var chai = require('chai');
var should = chai.should();
var fs = require("fs");

var chaiHttp = require('chai-http');
var server = require('../app');


/* 
Things we need to test (per spec):
GET article
Accepts ID, returns object {id, title, date, body, categories}

POST article
Creates article with title, body, categories, returns id, datetime
*/

chai.use(chaiHttp);

describe("API Routes", ()=>{

    it("Fails to get an Article by ID", done=>{
        chai.request(server)
        .get("/articles/1000")
        .send()
        .end(function(err,res){
          res.should.be.json;
          res.should.have.status(404);
          done();
        })
    });

    it("Gets an Article by ID", done=>{
        chai.request(server)
        .get("/articles/1")
        .send()
        .end(function(err,res){
          res.should.be.json;
          res.should.have.status(200);
          res.body.id.should.equal(1);
          res.body.title.should.equal("I am a title.");
          done();
        })
    });

    it("Creates an Article", done=>{
      chai.request(server)
      .post("/")
      .send({
          title: "How to write an article",
          body: "First, you should try really hard to write an article.",
          categories: ['collectables']
      })
      .end(function(err,res){
          res.should.have.status(201);
          res.text.should.equal("/articles/4")
      })
    });
})