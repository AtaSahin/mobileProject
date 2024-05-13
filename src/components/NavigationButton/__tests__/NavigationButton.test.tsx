import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import NavigationButton from '../NavigationButton';
import {useDispatch} from 'react-redux';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

describe('NavigationButton component', () => {
  it('renders correctly', () => {
    const mockNavigation = {
      navigate: jest.fn(),
    };

    const {getByText} = render(
      <NavigationButton
        title="Navigate Button"
        navigation={mockNavigation as any}
        navigateTo="ScreenA"
      />,
    );

    const button = getByText('Navigate Button');
    expect(button).toBeDefined();
  });

  it('navigates on press', () => {
    const mockNavigation = {
      navigate: jest.fn(),
    };

    const {getByText} = render(
      <NavigationButton
        title="Navigate Button"
        navigation={mockNavigation as any}
        navigateTo="ScreenA"
      />,
    );

    const button = getByText('Navigate Button');
    fireEvent.press(button);

    expect(mockNavigation.navigate).toHaveBeenCalledWith('ScreenA');
  });

  it('dispatches action when useRedux is true', () => {
    const mockDispatch = jest.fn();
    (useDispatch as jest.Mock).mockReturnValue(mockDispatch);

    const {getByText} = render(
      <NavigationButton
        title="Redux Button"
        navigation={{navigate: jest.fn()} as any}
        navigateTo="ScreenB"
        useRedux={true}
      />,
    );

    const button = getByText('Redux Button');
    fireEvent.press(button);

    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'CHANGE_PAGE',
      payload: 1,
    });
  });
});
