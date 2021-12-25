import {sumCart} from './sumCart';

describe('sumCart', () => {
    test('shoud return 0 when not an array', () => {
        expect(sumCart({})).toBe(0);
        expect(sumCart(0)).toBe(0);
        expect(sumCart(-1)).toBe(0);
        expect(sumCart('')).toBe(0);
        expect(sumCart('abc')).toBe(0);
    })
    test('shoud return 0 when quantity or price zero', () => {
        const cartList = [
            {name: 'toothpase', price: 0, quanlity: 2},
            {name: 'rice', price: 10000, quanlity: 0},
        ];
        expect(sumCart(cartList)).toBe(0);
    })
    test('shoud return sum of cart', () => {
        const cartList = [
            {name: 'toothpase', price: 20000, quanlity: 2},
            {name: 'rice', price: 10000, quanlity: 1},
        ];
        expect(sumCart(cartList)).toBe(50000);
    })
})