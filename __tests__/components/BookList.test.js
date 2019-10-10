import React from 'react';

import {render, fireEvent} from '@testing-library/react-native';

import BookList from '~/components/BookList';

describe('BookList', () => {
  it('should be able to add new book', () => {
    const {getByText, getByTestId} = render(<BookList />);

    fireEvent.changeText(getByTestId('book-input'), 'Book 1');
    fireEvent.press(getByText('Adicionar'));

    expect(getByText('Book 1')).toBeTruthy();
    expect(getByTestId('book-input')).toHaveProp('value', '');
  });
});
