import React from 'react';
import { mount } from 'enzyme';
import store from '../../../src/store';
import Home from '../../../src/pages/Home';

it('Home shows a link "Go to Blog"', () => {
  const wrapper = mount(<Home />, { context: { store }});

  expect(wrapper.find('a').text()).toEqual('Go to Blog');
});
