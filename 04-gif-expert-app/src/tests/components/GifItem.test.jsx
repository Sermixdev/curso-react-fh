import { render, screen } from '@testing-library/react';
import { GifItem } from '../../components/GifItem';

describe('Pruebas en GifItem', () => {
    const title = 'Saitama';
    const url = 'https://one-punch.com/saitama.jpg';
    test('should match with snapshot', () => {
        const { container } = render(<GifItem title={title} url={url} />);
        expect(container).toMatchSnapshot();
    });

    test('should show img with url alt indicated', () => {
        render(<GifItem title={title} url={url} />);
        // screen.debug();
        // expect( screen.getByRole('img').src).toBe(url)
        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(alt);
    });

    test('should mostrar titulo de noseke', () => {
        render(<GifItem title={title} url={url} />);
        expect(screen.getByTex(title)).toBeTruthy();
    });
});
