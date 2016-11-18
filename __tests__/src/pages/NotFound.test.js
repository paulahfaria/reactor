import React from 'react';
import { mount } from 'enzyme';
import NotFound from '../../../src/pages/NotFound';


it('NotFound shows a link "404"', () => {
  const app = mount(<NotFound />);

  expect(app.find('div').text()).toEqual('404');
});
