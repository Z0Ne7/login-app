import React from 'react';
import { create } from 'react-test-renderer';
import { LogoutButton } from '../../../Button';

describe('Button component', () => {
  test('Matches the snapshot', () => {
    const button = create(<LogoutButton />);
    expect(button.toJSON()).toMatchSnapshot();
  });
});
