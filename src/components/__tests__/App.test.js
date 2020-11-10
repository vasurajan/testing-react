import React from 'react';
// shallow here is a function that we're going to use to render out a instance of our app component.
import { shallow } from 'enzyme';

import App from '../App';
import CommentBox from '../CommentBox';
import CommentList from '../CommentList';

// it => organizes our tests and contains the test description and function containing test logic
it("verifies componentbox existence", () => {
    // wrapped is to indicate that the object that we got back is a wrapped version of our app component
    // means that this is a component that has some additional functionality loaded on the top
    const wrapped = shallow(<App />);
    // find every copy of commentbox inside of wrapped version of our app component
    expect(wrapped.find(CommentBox).length).toEqual(1);
})

it("verifies componentlist existence", () => {
    // wrapped is to indicate that the object that we got back is a wrapped version of our app component
    // means that this is a component that has some additional functionality loaded on the top
    const wrapped = shallow(<App />);
    // find every copy of commentbox inside of wrapped version of our app component
    expect(wrapped.find(CommentList).length).toEqual(1);
})