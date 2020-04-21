import React from 'react';

import TechList from '~/components/TechList';

import { render, fireEvent } from '@testing-library/react-native';

describe('TechList', () => {
  const tech = 'Node.js';

  it('should be able to add new tech', () => {
    const { getByText, getByTestId } = render(<TechList />);

    fireEvent.changeText(getByTestId('tech-input'), tech);
    fireEvent.press(getByText('Adicionar'));

    expect(getByText(tech));
    expect(getByTestId('tech-input')).toHaveProp('value', '');
  });
})