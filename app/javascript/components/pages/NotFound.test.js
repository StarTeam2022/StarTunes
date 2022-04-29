import React from 'react'

import Enzyme, { shallow } from 'enzyme'

import Adapter from 'enzyme-adapter-react-16'

import NotFound from './NotFound.js'

Enzyme.configure({ adapter: new Adapter() })


describe("When NotFound Renders", () => {
  let notfound

  beforeEach(() => {
    notfound = shallow(<NotFound />)
  })

  it("displays a heading", () => {
    const heading = notfound.find('h1')
    expect(heading.text()).toEqual("404 Not Found");
  })
})
