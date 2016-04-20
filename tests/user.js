import request from 'supertest';
import server from '../server';

describe('testing server routes', () => {


  it('404 everything else', (done) => {
    request(server)
      .get('/foo/bar')
      .expect(404, done);
  });
});

describe('testing HTTP requests', () => {

  it('returns 200 for /api/users POST', (done) => {
    request(server)
      .post('/api/users')
      .send({
        name: 'alvin',
        picture: 'sadfsaldfkj'
      })
      .expect(200)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        done();
      });
  });

  it('returns all users', done => {
    request(server)
      .get('/api/users')
      .expect(200)
      .end((err, res) => {
        if (err) {
          done(err);
        } else {
          done();
        }
      })
  });
})
