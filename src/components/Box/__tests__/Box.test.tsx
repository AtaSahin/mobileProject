import React from 'react';
import {render} from '@testing-library/react-native';
import Box from '../Box';

describe('Box component', () => {
  it('renders correctly with provided props', () => {
    const imageSource = {uri: 'https://example.com/image.jpg'};
    const heading = 'Test Heading';
    const subheading = 'Test Subheading';

    const {getByText, getByTestId} = render(
      <Box
        imageSource={imageSource}
        heading={heading}
        subheading={subheading}
      />,
    );

    const boxImage = getByTestId('boxImage');
    expect(boxImage.props.source).toEqual(imageSource);

    const boxHeading = getByText(heading);
    expect(boxHeading).toBeTruthy();

    const boxSubheading = getByText(subheading);
    expect(boxSubheading).toBeTruthy();
  });
});
