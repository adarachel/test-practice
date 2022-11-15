const capitalize = require('../tasks/task4');

test('expected the string to be capitalized = "Rachel" ', () => {
  //Arrange
  const str = 'rachel';
  //Act 
  const capitalizedStr = capitalize(str);
  //Assert
  expect(capitalizedStr).toBe('Rachel');
})