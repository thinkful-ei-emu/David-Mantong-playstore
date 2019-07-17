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
      });

  });
  it('Should return game by genres accending');
});