import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import RadioButton from '../RadioButton';

describe('RadioButton component', () => {
  it('should render correctly with default props', () => {
    const {getByTestId, getByText} = render(
      <RadioButton
        label="Test Label"
        heading="This is a heading"
        subheading="This is a subheading"
        selected={false}
        onPress={() => {}}
      />,
    );

    const radioButton = getByTestId('radioButton');
    expect(radioButton).toBeTruthy();

    const headingText = getByText('This is a heading');
    expect(headingText).toBeTruthy();

    const subheadingText = getByText('This is a subheading');
    expect(subheadingText).toBeTruthy();
  });

  it('should call onPress function when button is pressed', () => {
    const mockPressFn = jest.fn();

    const {getByTestId} = render(
      <RadioButton
        label="Test Label"
        heading="This is a heading"
        subheading="This is a subheading"
        selected={false}
        onPress={mockPressFn}
      />,
    );

    const radioButton = getByTestId('radioButton');
    fireEvent.press(radioButton);

    expect(mockPressFn).toHaveBeenCalledTimes(1);
  });
});
