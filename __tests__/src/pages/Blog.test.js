import React from 'react';
import { mount } from 'enzyme';
import store from '../../../src/store';
import Blog from '../../../src/pages/Blog';

it('Blog shows a link "Go to Blog"', () => {
  const wrapper = mount(<Blog />, { context: { store } });

  expect(wrapper.find('a').text()).toEqual('Go to Home');
});
