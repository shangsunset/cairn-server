import request from 'supertest';
import server from '../server';
import Message from '../models/Message';

describe('message api', () => {

  it('list all the messages', done => {

    request(server)
      .get('/api/messages')
      .expect(200, done);
  });

  it('post a message to server', done => {

    const message = new Message({

      content: 'hello world',
      coordinate: [23.234234, -1.453453],
    });

    request(server)
      .post('/api/messages')
      .send(message)
      .expect(200)
      .expect(message => {
        message.content = 'hello world';
      })
    .end(err => {
      if (err) return done(err);
      done();
    })

  });
});
