import React from 'react';
import { render, screen } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import Home from '../components/Home';

jest.mock('react-redux', () => ({
    useDispatch: jest.fn(),
    useSelector: jest.fn(),
  }));
  
  describe('Home component', () => {
    test('renders an empty list when financeData is empty', async () => {
      useDispatch.mockReturnValue(jest.fn());
      useSelector.mockReturnValue([]);
  
      render(<Home />);

      const itemElements = screen.queryAllByTestId('home-item');
      expect(itemElements.length).toBe(0);
    });
    
    test('dispatches getFinance action on mount', () => {
       
        const dispatchMock = jest.fn();
        useDispatch.mockReturnValue(dispatchMock);
        useSelector.mockReturnValue([]);
    
        render(<Home />);
    
        expect(dispatchMock).toHaveBeenCalledTimes(1);
        expect(dispatchMock).toHaveBeenCalledWith(expect.any(Function));
    });
});