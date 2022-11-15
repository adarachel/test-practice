const reverseString = require('../tasks/task2');


test('expected reverse string to be for lehcar', () => {
  //Arrange
  const str = 'rachel';
  // Act 
  const reverseStr = reverseString(str);
  //Assert
  expect(reverseStr).toBe('lehcar');
});