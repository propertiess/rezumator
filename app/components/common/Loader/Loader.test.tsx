import { render, screen } from '@testing-library/react';
import { Loader } from './Loader';

const setup = () => render(<Loader />);

describe('Loader', () => {
  it('renders', () => {
    setup();
    expect(screen.getByTestId('Loader')).toBeInTheDocument();
  });
});
