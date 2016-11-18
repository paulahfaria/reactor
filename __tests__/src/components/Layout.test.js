import React from 'react';
import { mount } from 'enzyme';
import Layout from '../../../src/components/Layout';

it('Home should have the class ".layout"', () => {
  const wrapper = mount(<Layout />);

  expect(wrapper.find('.layout').length).toEqual(1);
});
