import React from 'react';
import { mount } from 'enzyme';

import CommentBox from 'components/CommentBox';

let wrapped;

beforeEach(() => {
    wrapped = mount(<CommentBox />);
})

afterEach(() => {
    wrapped.unmount();
})

it('have a textarea and a button', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(1);
})

it('have a textarea for users to type in', () => {
    // when we simulate an event we want use the real HTML name of that event not the react name
    wrapped.find('textarea').simulate('change', {
        // fake or mock event object
        target: { value: 'new comment' }
    });
    wrapped.update();

    expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
})

it('textarea gets clear when users submit the form', () => {
    // when we simulate an event we want use the real HTML name of that event not the react name
    wrapped.find('textarea').simulate('change', {
        // fake or mock event object
        target: { value: 'new comment' }
    });
    wrapped.update();
    wrapped.find('form').simulate('submit');
    wrapped.update();
    expect(wrapped.find('textarea').prop('value')).toEqual('');
})