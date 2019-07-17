const expect = require('chai').expect;
const request= require('supertest');
const app = require('./app.js');
const moviedex = require('./movie.json');
describe('GET /movie', (req)=>{
  
  it ('should return a list of games', () =>{
    let response = moviedex;
    return request(app)
      .get('/movie')
      .expect(200)
      .expect('Content-Type', /json/)
      .expect(res => {
        expect(res.body).to.be.include('genre');
        expect(response = response.filter(movie =>
          movie.genre.toLowerCase().includes(req.query.genre.toLowerCase())));
      });
  });
});

