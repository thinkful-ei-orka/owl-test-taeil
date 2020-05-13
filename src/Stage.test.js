import React from 'react';
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import Stage from './Stage'

describe(`TheDate Component`, () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Stage />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  it('renders the UI as expected', () => {
    expect(
      renderer.create(<Stage />).toJSON()
    ).toMatchSnapshot()
  })
})
