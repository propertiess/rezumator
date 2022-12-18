import { render, screen } from '@testing-library/react';
import { Divider } from './Divider';

const setup = () => render(<Divider />);

describe('Divider', () => {
  it('renders', () => {
    setup();
    expect(screen.getByTestId('Divider')).toBeInTheDocument();
  });
});
