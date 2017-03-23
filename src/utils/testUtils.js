import React, { createElement } from 'react';
import { shallow, mount, render } from 'enzyme';

export const shallowTest = (Component, props = {}) => {
  const enzymeWrapper = shallow(<Component {...props} />);

  return {
    props,
    enzymeWrapper,
  };
};

export const mountTest = (Component, props = {}) => {
  const enzymeWrapper = mount(<Component {...props} />);

  return {
    props,
    enzymeWrapper,
  };
};

export const renderTest = (Component, props = {}) => {
  const enzymeWrapper = render(<Component {...props} />);

  return {
    props,
    enzymeWrapper,
  };
};
