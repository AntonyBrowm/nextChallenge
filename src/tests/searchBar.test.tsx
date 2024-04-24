import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchBar from '@/components/search';
import { BankObject } from '@/values/interface';


describe('SearchBar Component', () => {
  test('should call onSearch prop with correct search term when input value changes', () => {

    const mockOnSearch = jest.fn();
    const bankList: BankObject[] = [];
    const { getByPlaceholderText } = render(<SearchBar onSearch={mockOnSearch} bankList={bankList} />);


    fireEvent.change(getByPlaceholderText('Search by bank name'), { target: { value: 'BBVA' } });


    expect(mockOnSearch).toHaveBeenCalledWith('BBVA', bankList);
  });
});
