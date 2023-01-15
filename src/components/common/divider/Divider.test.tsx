import { Divider } from './Divider';
import { render, screen } from '@testing-library/react';

const setup = () => render(<Divider />);

describe('Divider', () => {
  it('renders', () => {
    setup();
    expect(screen.getByTestId('Divider')).toBeInTheDocument();
  });
});
