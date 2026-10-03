import {describe, it, expect} from 'vitest';
import { formatearPrecio} from './precio.js';

describe("formatearPrecio", () => {
    it('debe formatear un numero entero correctamente con separadores de miles',
        () => {
        expect(formatearPrecio(1000)).toBe('$1.000') ;
        expect(formatearPrecio(1234567)).toBe('$1.234.567') ;
    })

    
});

