import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

// it => organizes our tests and contains the test description and function containing test logic
it("verifies component existence", () => {
    const div = document.createElement('div'); // fake div created by JSDOM to trick React
    ReactDOM.render(<App />, div)

    // check if comment box is inside this div here
    expect(div.innerHTML).toContain('Comment Box')

    ReactDOM.unmountComponentAtNode(div); // cleanup at the end
})