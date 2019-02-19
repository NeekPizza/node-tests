const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {

  it('should add two numbers', () => {
    var res = utils.add(1, 2);
    expect(res).toBe(3).toBeA('number');
  });
  
  it('should square a number', (done) => {
    utils.square(5, (square) => {
      expect(square).toBe(25).toBeA('number');
      done();
    });
  });
  
  it('should verify first and last names are set', () => {
    var res = utils.setName({age: 28, location: 'Austin'}, 'Nick Piazza');
    expect(res).toInclude({
      firstName: 'Nick',
      lastName: 'Piazza',
    });
  });
  
  it('should async add two numbers', (done) => {
    utils.asyncAdd(1, 2, (sum) => {
      expect(sum).toBe(3).toBeA('number');
      done();
    });
  });
});
