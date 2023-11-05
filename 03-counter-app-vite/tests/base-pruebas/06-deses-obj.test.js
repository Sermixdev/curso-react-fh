import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe('Pruebas en 06-deses-obj', () => {
    test('usContext debe devolver un objeto', () => {
        const clave = "esto es la clave";
        const edad = "esto es la edad";
        const obj = {
            nombreClave: clave,
            anios: edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232,
            },
        };
        let prueba = usContext({ clave, edad })
        expect(prueba).toStrictEqual(obj)
    });
});
