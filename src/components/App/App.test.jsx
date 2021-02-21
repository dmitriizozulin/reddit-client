import React from 'react';
import { render, screen, configure, waitForElementToBeRemoved } from '@testing-library/react';
import { expect } from 'chai';

import { Provider } from 'react-redux';
import store from '../../store';

import App from './App';

configure({
  asyncUtilTimeout: 5000,
});

describe('App', () => {
  it('renders app', () => {
    const { getByTestId } = render(<Provider store={store}><App /></Provider>);

    const loading = getByTestId('reddit-post-loading');
    expect(loading).to.exist;
    screen.debug(loading);
  });
  it('loads posts', async () => {
    const { findAllByTestId, queryAllByTestId } = render(<Provider store={store}><App /></Provider>);

    await waitForElementToBeRemoved(() => queryAllByTestId('reddit-post-loading'));
    const posts = await findAllByTestId('reddit-post');
    expect(posts).to.have.length(25);
    screen.debug(posts);
  });
});
