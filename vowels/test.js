import vowels from './index';
it('Vowels is a function', () => {
  expect(typeof vowels).toEqual('function');
});

it('returns the number of vowels used', () => {
  expect(vowels('aeiou')).toEqual(5);
});

it('returns the number of vowels used', () => {
  expect(vowels('abcdefghijklmnopqrstuvwxyz')).toEqual(5);
});

it('returns the number of vowels used', () => {
  expect(vowels('bcdfghjkl')).toEqual(0);
});