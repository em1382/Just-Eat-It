import 'react-native';
import React from 'react';
import { MonoText } from '../StyledText';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<Text
      style={
        Array [
          undefined,
          Object {
            "fontFamily": "space-mono",
          },
        ]
      }
    >
      Snapshot test!
    </Text>).toJSON();

  expect(tree).toMatchSnapshot();
});
