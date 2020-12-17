import { expect, it } from '@jest/globals';
import capitalize from './index';

describe('Capitalize function', () => {
    it('capitalize function is defined', () => {
        expect(capitalize).toBeDefined();
    });
    it('capitalize function should return null when no arguments or empty string is passed', () => {
        expect(capitalize()).toBeNull();
    });
    it('capitalize function should return capitalized string when single word is passed', () => {
        expect(capitalize('hello')).toBe('Hello');
    });
    it('capitalize function should capitalize each word of the sentence when sentence is passed', () => {
        expect(capitalize('how are you?')).toBe('How Are You?');
    });
});