const expect = require('chai').expect;
const request= require('supertest');
const app = require('./app.js');

describe('GET /apps', ()=>{
  it ('should return a list of games', () =>{
    return request(app)
      .get('/apps')
      .expect(200)
      .expect('Content-Type', /json/)
      .expect(res => {
        expect(res.body).to.be.an('array');
        let i = 0, sorted = true;
        while (sorted && i < res.body.length -1){
          sorted = sorted && res.body[i].rating < res.body[i + 1].rating;
          i++;
        }
        expect(sorted).to.be.true;
      });
  });
});

