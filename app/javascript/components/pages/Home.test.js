import React from 'react'

import Enzyme, { shallow } from 'enzyme'

import Adapter from 'enzyme-adapter-react-16'

import Home from './Home.js'

// import playButton from '../assets/playButton.png'

Enzyme.configure({ adapter: new Adapter() })

describe("When Home Renders", () => {
  let home
  beforeEach(() => {
    home = shallow(<Home />)
  })
  it("displays a heading", () => {
    const heading = home.find('h1')
    expect(heading.text()).toEqual(
      "TIRED OF THE SAME OLD SONGS, LET'S VIBE OUT!"
    );
  })
  
  it("checks all image's props", () => {
    const img = home.find("img")
    expect(img.prop("src")).toEqual(playButton)
    expect(img.prop("alt")).toEqual("playButton")
    expect(img.prop("id:")).toEqual("play-image");
  })
})