import { getImagen } from '../../src/base-pruebas/11-async-await';

describe('Pruebas en 11-async-await', () => {
    test('getImagen debe retornar un error si no tenemos API Key', async() => {
        const resp = await getImagen();
        expect(resp).toBe('no se encontro la imagen')
    });
});
