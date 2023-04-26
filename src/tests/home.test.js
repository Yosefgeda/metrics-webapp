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
          </Router>
        );
        const homeElement = screen.getByText('Home');
        expect(homeElement).toBeInTheDocument();
    });

    test('renders Cryptocurrency Navbar header', () => {
        render(
            <Router>
            <Navbar />
            </Router>
        );
        const cryptoElement = screen.getByText('Cryptocurrency');
        expect(cryptoElement).toBeInTheDocument();
    });
});
