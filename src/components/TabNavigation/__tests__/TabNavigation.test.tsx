import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import TabNavigation from '../TabNavigation';

describe('TabNavigation component', () => {
  it('renders correctly', () => {
    const mockOnChangeTab = jest.fn();

    const {getByText} = render(
      <TabNavigation activeTab="test1" onChangeTab={mockOnChangeTab} />,
    );

    expect(getByText('Test 1')).toBeTruthy();
    expect(getByText('2')).toBeTruthy();
    expect(getByText('3')).toBeTruthy();
    expect(getByText('4')).toBeTruthy();
    expect(getByText('5')).toBeTruthy();
  });

  it('changes active tab on press', () => {
    const mockOnChangeTab = jest.fn();

    const {getByText} = render(
      <TabNavigation activeTab="test1" onChangeTab={mockOnChangeTab} />,
    );

    const tab2 = getByText('2');
    fireEvent.press(tab2);
    expect(mockOnChangeTab).toHaveBeenCalledWith('2');

    const tab4 = getByText('4');
    fireEvent.press(tab4);
    expect(mockOnChangeTab).toHaveBeenCalledWith('4');
  });
});
