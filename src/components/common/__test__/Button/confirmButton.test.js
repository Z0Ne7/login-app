import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import { Button } from '../..';

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

describe('Button component', () => {
  test('it shows the expected text when clicked', () => {
    act(() => {
      ReactDOM.render(<Button />, container);
    });
    const button = container.getElementsByTagName('button')[0];
    expect(button.textContent).toBe('CLICK TO CONFIRM');
    act(() => {
      button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(button.textContent).toBe('CONFIRMED');
  });
});
