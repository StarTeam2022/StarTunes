import React from 'react'

import Enzyme, { shallow } from 'enzyme'

import Adapter from 'enzyme-adapter-react-16'

import SongIndex from './SongIndex.js'

Enzyme.configure({ adapter: new Adapter() })

describe("When SongIndex Renders", () => {
  let songIndex
  beforeEach(() => {
    songIndex = shallow(<SongIndex />)
  })
  it("displays a heading", () => {
    const heading = songIndex.find('h1')
    expect(heading.text()).toEqual('My Songs')
  })
})
