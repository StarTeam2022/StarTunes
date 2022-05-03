import React from 'react'

import Enzyme, { shallow } from 'enzyme'

import Adapter from 'enzyme-adapter-react-16'

import NotFound from './NotFound.js'

import space404 from '../assets/space404.jpeg'

Enzyme.configure({ adapter: new Adapter() })

jest.mock('../assets/space404.jpeg')


describe("When NotFound Renders", () => {
  let notfound

  beforeEach(() => {
    notfound = shallow(<NotFound />)
  })

  it("checks all image's props", () => {
    const img = notfound.find("img")
    expect(img.prop("className")).toEqual('space404')
    expect(img.prop("src")).toEqual(space404)
    expect(img.prop("alt")).toEqual("404 not found image")
  })
})
