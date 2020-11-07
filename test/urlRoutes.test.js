process.env.NODE_ENV = 'test';
const UrlShortner = require('../models/UrlShortner');

//Require the dev-dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const should = chai.should();

chai.use(chaiHttp);

//Our parent block
describe('urlRoutes', () => {
  beforeEach((done) => { //Before each test we empty the database
        UrlShortner.deleteMany({}, (err) => {
           done();
        });
    });
   
//Test the /GET route...
  describe('/GET urls', () => {
    it('it should GET all the urls', (done) => {
       
        chai.request(server)
          .get('/')
            .end((err, res) => {
              console.log(err);
              should.exist(res.body);
              res.should.have.status(200);
              res.should.be.an('object');
              done();
            });
      });
  });
});

//Test the /POST route...
 describe('/POST urls', () => {
  it('it should add given propertie on /shortUrls POST', (done) => {
    let convertUrl = {
      longUrl:"https://www.npmjs.com/package/should",
      shortUrl: "rgshbec",
      clicks: 0,
      createdAt: Date.now,
    }
    chai.request(server)
        .post('/shortUrls')
        .send(convertUrl)
        .end((err, res) => {
              console.log(err);
              should.exist(res.body);
              res.should.have.status(200);
              res.should.be.an('object');
              convertUrl.should.have.property('longUrl');
              convertUrl.should.have.property('clicks');
              convertUrl.should.have.property('createdAt');
            done();
        });
  });

});