import React from 'react';

import { shallowTest, mountTest } from '../src/utils/testUtils';
import Textarea from '../src/react-textarea-count';

describe('test Textarea', () => {
  it('should render the component', () => {
    const { enzymeWrapper } = shallowTest(Textarea);

    expect(enzymeWrapper.length).toBe(1);
  });

  it('should contain .textarea__wrapper div by default', () => {
    const { enzymeWrapper } = shallowTest(Textarea);

    expect(enzymeWrapper.find('div.textarea__wrapper').length).toBe(1);
  });

  it('should contain .textarea__count span by default', () => {
    const { enzymeWrapper } = shallowTest(Textarea);

    expect(enzymeWrapper.find('span.textarea__count').length).toBe(1);
  });

  it('should not contain .textarea__count span when prop countShow is false', () => {
    const { enzymeWrapper } = shallowTest(Textarea, {
      countShow: false,
    });

    expect(enzymeWrapper.find('span.textarea__count').length).toBe(0);
  });

  it('should update state accordingly when some text is added', () => {
    const { enzymeWrapper } = mountTest(Textarea);

    enzymeWrapper.node.textarea.value = 'My input';
    enzymeWrapper.find('textarea').simulate('input');

    expect(enzymeWrapper.state('count')).toEqual(8);
  });

  it('should show correct text\'s length when some text is added', () => {
    const { enzymeWrapper } = mountTest(Textarea);

    enzymeWrapper.node.textarea.value = 'My input';
    enzymeWrapper.find('textarea').simulate('input');

    expect(enzymeWrapper.find('span.textarea__count').text()).toEqual('8');
  });

  it('should show count limit when some text is added & countLimit prop is passed', () => {
    const { enzymeWrapper } = mountTest(Textarea, {
      countLimit: 5,
    });

    enzymeWrapper.node.textarea.value = 'My input';
    enzymeWrapper.find('textarea').simulate('input');

    expect(enzymeWrapper.find('span.textarea__count').text()).toEqual('8/5');
  });

  it('should show have error class when longer text is added, countLimit prop is passed', () => {
    const { enzymeWrapper } = mountTest(Textarea, {
      countLimit: 5,
    });

    enzymeWrapper.node.textarea.value = 'My input';
    enzymeWrapper.find('textarea').simulate('input');

    expect(enzymeWrapper.find('span.textarea__count').hasClass('textarea__count--error')).toBeTruthy();
  });

  it('should not have an error class when shorter text is added, countLimit prop is passed', () => {
    const { enzymeWrapper } = mountTest(Textarea, {
      countLimit: 5,
    });

    enzymeWrapper.node.textarea.value = 'My';
    enzymeWrapper.find('textarea').simulate('input');

    expect(enzymeWrapper.find('span.textarea__count').hasClass('textarea__count--error')).toBeFalsy();
  });

  it('should not have an error class when text is added & countLimit prop is not passed', () => {
    const { enzymeWrapper } = mountTest(Textarea);

    enzymeWrapper.node.textarea.value = 'My input';
    enzymeWrapper.find('textarea').simulate('input');

    expect(enzymeWrapper.find('span.textarea__count').hasClass('textarea__count--error')).toBeFalsy();
  });
});
