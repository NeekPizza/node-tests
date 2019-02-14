const expect = require('expect');

const utils = require('./utils');

it('should add two numbers', () => {
  var res = utils.add(1, 2);
  expect(res).toBe(3).toBeA('number');
});

it('should square a number', () => {
  var res = utils.square(5);
  expect(res).toBe(25).toBeA('number');
});

it('should verify first and last names are set', () => {
  var res = utils.setName({age: 28, location: 'Austin'}, 'Nick Piazza');
  expect(res).toInclude({
    firstName: 'Nick',
    lastName: 'Piazza',
  });
});