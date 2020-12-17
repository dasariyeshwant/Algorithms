import reverse from './index';

describe('Revers string', () => {
    it('given a string, should reverse a string and return it', () => {
        expect(reverse('abcd')).toBe('dcba');
    });
    it('given a string with extra spaces, should reverse a string and return it', () => {
        expect(reverse('abcd   ')).toBe('   dcba');
    });
});