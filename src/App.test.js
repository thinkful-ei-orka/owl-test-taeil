import React from 'react';
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import App from './App'

describe(`App Component`, () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  it('renders the UI as expected', () => {
    expect(
      renderer.create(<App />).toJSON()
    ).toMatchSnapshot()
  })
})
