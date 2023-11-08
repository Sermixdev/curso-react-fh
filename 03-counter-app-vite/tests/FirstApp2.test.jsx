import { render, screen } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Pruebas en FirstApp', () => {
    const title = 'hola soy goku';
    const subTitle = 'Hola soy un subtitulo';
    test('should match with snapshot', () => {
        const { container } = render(<FirstApp title={title} />);
        expect(container).toMatchSnapshot();
    });

    test('debe de mostrar el mensaje de "Hola, soy goku"', () => {
        // screen.debug();
        render(<FirstApp title={title} />);
        expect(screen.getByText(title)).toBeTruthy();
    });

    test('should show the title in h1', () => {
        render(<FirstApp title={title} />);
        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(title);
    });

    test('debe mostrar el subtitulo enviado por props', () => {
        render(<FirstApp title={title} subTitle={subTitle} />);
        expect(screen.getAllByText(subTitle).length).toBe(1)
    });
});
