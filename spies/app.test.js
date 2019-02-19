const expect = require('expect');
const rewire = require('rewire');

const app = rewire('./app');

describe('App', () => {
  const db = {
    saveUser: expect.createSpy(),
  };

  app.__set__('db', db);

  it('should call the spy correctly', () => {
    const spy = expect.createSpy();
    spy('Nick', 28);
    expect(spy).toHaveBeenCalledWith('Nick', 28);
  });

  it('should call saveUser with user object', () => {
    const email = 'nick@example.com';
    const password = 'abc123';

    app.handleSignUp(email, password);
    expect(db.saveUser).toHaveBeenCalledWith({email, password});
  });

});