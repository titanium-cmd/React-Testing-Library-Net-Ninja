import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe('Header', () => {
    // Using getBy* queries ...
    it('should get header by a text', () => {
        render(<Header title={'My Header'} />);
        const headlingElement = screen.getByText(/my header/i);
        expect(headlingElement).toBeInTheDocument();
    });

    it('should get header by role', () => {
        render(<Header title={'My Header'} />);
        const headlingElement = screen.getByRole('heading');
        expect(headlingElement).toBeInTheDocument();
    });

    it('should get header by title', () => {
        render(<Header title={'My Header'} />);
        const headlingElement = screen.getByTitle('header');
        expect(headlingElement).toBeInTheDocument();
    });
})

