const utils = require('./utils');

it('should add two numbers', () => {
  var res = utils.add(1, 2);
  
  if (res !== 3) {
    throw new Error(`Expected 3 but got ${res}`);
  }
});

it('should square a number', () => {
  var res = utils.square(5);
  if (res !== 25) {
    throw new Error(`Expected 25 but got ${res}`);
  }
});