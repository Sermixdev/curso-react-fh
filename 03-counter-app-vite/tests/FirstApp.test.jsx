import { render } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Pruebas en FirstApp', () => {
    // test('Debe de hacer match con el snapshot', () => {
    //     const title = 'Hola, soy veggeta';
    //     const { container } = render(<FirstApp title={title} />);
    //     expect(container).toMatchSnapshot();
    // });

    test('Debe mostrar titulo en h1', () => {
        const title = 'Hola, soy veggeta';
        const { container, getByText, getByTestId } = render(<FirstApp title={title} />);
        expect(getByText(title)).toBeTruthy();
        // const h1 = container.querySelector('h1');
        // expect(h1.innerHTML).toBe(title)
        expect(getByTestId('test-title').innerHTML).toBe(title);
    });

    test('should show the subtitle send by props', () => {
        const title = 'Hola, soy veggeta';
        const subTitle = 'Hola, soy un subtitulo';
        const { getAllByText } = render(<FirstApp title={title} subTitle={subTitle} />);
        expect(getAllByText(subTitle)).toBeTruthy();
    });
});
