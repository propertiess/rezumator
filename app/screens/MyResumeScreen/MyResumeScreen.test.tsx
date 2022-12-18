import { render, screen } from '@testing-library/react';
import { MyResumeScreen } from './MyResumeScreen';

const setup = () => render(<MyResumeScreen />);

describe('MyResumeScreen', () => {
  it('renders', () => {
    setup();
    expect(screen.getByTestId('MyResumeScreen')).toBeInTheDocument();
  });
});
