import { fireEvent, render, screen } from '@testing-library/react';
import { CounterApp } from '../src/CounterApp';

describe('Pruebas en CounterApp', () => {
    const title = 'hola soy william';
    const value = 10;

    test('should match with snapshot', () => {
        const { container } = render(<CounterApp title={title} value={value} />);
        expect(container).toMatchSnapshot();
    });

    // test('debe de mostrar el valor de 100"', () => {
    //     render(<CounterApp title={title} value={value} />);
    //     // screen.debug();
    //     expect(screen.getByText('100')).toBeTruthy();
    // });

    test('debe de incrementar con el boton +1', () => {
        render(<CounterApp value={value} />);
        fireEvent.click(screen.getByText('+1'));
        expect(screen.getByText('11')).toBeTruthy();
    });

    test('debe de decrementar con el boton -1', () => {
        render(<CounterApp value={value} />);
        fireEvent.click(screen.getByText('-1'));
        expect(screen.getByText('9')).toBeTruthy();
    });

    test('debe de resetear con el boton reset', () => {
        render(<CounterApp value={value} />);
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        // fireEvent.click(screen.getByText('Reset'));
        fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));
        expect(screen.getByText('10')).toBeTruthy();
    });
});
