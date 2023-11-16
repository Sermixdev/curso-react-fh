import { render, screen } from '@testing-library/react';
import { GifExpertApp } from '../GifExpertApp';

describe('Pruebas en GifExpertApp', () => {
    test('', () => {
        render(<GifExpertApp />);
        screen.debug();
    });
});
