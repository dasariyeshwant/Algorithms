import maxChar from './index';
describe('Max Char problem', () => {
    it('maxChar function is defined', () => {
        expect(maxChar).toBeDefined();
    });
    it('When maxChar is called should return the character that is being repeated the most', () => {
        expect(maxChar('abcdefccccff')).toBe('c');
        expect(maxChar('abcdefccccfffff')).toBe('f');
        expect(maxChar('abcdefccccff12111111111')).toBe('1');
    });
});