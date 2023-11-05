import { getHeroeById, getHeroesByOwner } from '../../src/base-pruebas/08-imp-exp';

describe('Pruebas en 08-imp-exp', () => {
    test('getHeroeById debe retornar un heroe por ID', () => {
        const id = 1;
        const hero = getHeroeById(id);

        expect(hero).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC',
        });
    });

    test('getHeroeById debe retornar undefined si no existe', () => {
        const id = 100;
        const hero = getHeroeById(id);
        console.log(hero);

        expect(hero).toBeFalsy();
    });

    test('getHeroeByOwner debe retornar un array con los heroes de DC', () => {
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);
        expect(heroes.length).toEqual(3);
    });
    test('getHeroeByOwner debe retornar un array con los heroes de Marvel', () => {
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);
        expect(heroes.length).toEqual(2);
    });
});
