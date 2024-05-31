import toUpperSnakeCase from '#src/index';

describe('Testing toUpperSnakeCase when passed a string', () => {
  test('all lower case then return formated string', () => {
    expect(toUpperSnakeCase('dog')).toEqual('DOG');
  });

  test('with two words then return formated string', () => {
    expect(toUpperSnakeCase('brown dog')).toEqual('BROWN_DOG');
  });

  test('with upper case letters in the middle then return formated string', () => {
    expect(toUpperSnakeCase('brownDog')).toEqual('BROWN_DOG');
  });

  test('with underscore(s) (_) case letters in the middle then return formated string', () => {
    expect(toUpperSnakeCase('brown__dog')).toEqual('BROWN_DOG');
    expect(toUpperSnakeCase('brown_dog')).toEqual('BROWN_DOG');
    expect(toUpperSnakeCase('brown___dog')).toEqual('BROWN_DOG');
  });

  test('with underscore(s) (_) case letters at the start then return formated string', () => {
    expect(toUpperSnakeCase('_dog')).toEqual('DOG');
    expect(toUpperSnakeCase('___dog')).toEqual('DOG');
  });

  test('with underscore(s) (_) case letters at the end then return formated string', () => {
    expect(toUpperSnakeCase('dog_')).toEqual('DOG');
    expect(toUpperSnakeCase('dog___')).toEqual('DOG');
  });
});
