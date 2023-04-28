import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import Navbar from '../components/Navbar';

describe('Nav Items', () => {
  test('renders Home Navbar header', () => {
    render(
      <Router>
        <Navbar />
      </Router>,
    );
    const navbars = screen.getAllByRole('link');
    expect(navbars).toHaveLength(1);
  });
});
