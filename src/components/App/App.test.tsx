import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders Title', () => {
    render(<App />);
    expect(screen.getByText(/Random Image/i)).toBeInTheDocument();
  });

  test('renders Header component', () => {
    render(<App />);
    expect(screen.getByText(/Header/i)).toBeDefined();
  });

  test('renders LeftSide component', () => {
    render(<App />);
    expect(screen.getByText(/Aside Left/i)).toBeDefined();
  });

  test('renders Main component', () => {
    render(<App />);
    expect(screen.getByText(/Main/i)).toBeDefined();
  });

  test('renders RightSide component', () => {
    render(<App />);
    expect(screen.getByText(/Aside Right/i)).toBeDefined();
  });

  test('renders Footer component', () => {
    render(<App />);
    expect(screen.getByText(/Footer/i)).toBeDefined();
  });
});
