import { expect } from '@jest/globals';
import reverseInt from './index';

describe('Reverse Int Function', () => {


    it('Reverse Function Exists', () => {
        expect(reverseInt).toBeDefined();
    });

    it('ReverseInt handles 0 as input', () => {
        expect(reverseInt(0)).toBe(0);
    });

    it('ReverseInt flips a positive number', () => {
        expect(reverseInt(5)).toBe(5);
        expect(reverseInt(15)).toBe(51);
        expect(reverseInt(315)).toBe(513);
        expect(reverseInt(2315)).toBe(5132);
    });

    it('ReverseInt flips a negative number', () => {
        expect(reverseInt(-5)).toBe(-5);
        expect(reverseInt(-15)).toBe(-51);
        expect(reverseInt(-90)).toBe(-9);
        expect(reverseInt(-2315)).toBe(-5132);
    });
});