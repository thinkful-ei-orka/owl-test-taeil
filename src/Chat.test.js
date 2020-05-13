import React from 'react';
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import Chat from './Chat'

describe(`Chat Component`, () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Chat />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  it('renders the UI as expected', () => {
    expect(
      renderer.create(<Chat />).toJSON()
    ).toMatchSnapshot()
  })
})
