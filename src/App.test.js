import React from 'react'
import ReactDOM from 'react-dom'
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


it('if everything works fine', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);

  expect(div.innerHTML).toContain("Hi Scofield");
})

