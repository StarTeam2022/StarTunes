import React from 'react'

import Enzyme, { shallow } from 'enzyme'

import Adapter from 'enzyme-adapter-react-16'

import About from './About.js'

import ryan from '../assets/ryan.jpg'

import tiffany from '../assets/tiffany.jpg'

import stevie from '../assets/stevie.jpg'

import arnold from '../assets/arnold.jpg'

Enzyme.configure({ adapter: new Adapter() })

jest.mock('../assets/ryan.jpg')
jest.mock('../assets/tiffany.jpg')
jest.mock('../assets/stevie.jpg')
jest.mock('../assets/arnold.jpg')

describe("When About Renders", () => {
  let about

  beforeEach(() => {
    about = shallow(<About />)
  })

  it("displays a heading", () => {
    const heading = about.find('h1')
    expect(heading.text()).toEqual("About Us!");
  })

  it("displays a card group", () => {
    const cardGroup = about.find("CardGroup");
    expect(cardGroup.length).toEqual(1);
  });

  it("displays 3 cards", () => {
    const card = about.find("Card");
    expect(card.length).toEqual(4);
  });

  it("checks all image's prop for Ryan", () => {
    const imgRyan = about.find("CardImg").at(3)
    expect(imgRyan.prop("alt")).toEqual("ryan")
    expect(imgRyan.prop("src")).toEqual(ryan)
  })

  it("checks all image's props for Tiff", () => {
    const imgTiff = about.find("CardImg").at(1)
    expect(imgTiff.prop("alt")).toEqual("tiffany")
    expect(imgTiff.prop("src")).toEqual(tiffany)
  })

  it("checks all image's props for Stevie", () => {
    const imgStevie = about.find("CardImg").first()
    expect(imgStevie.prop("alt")).toEqual("stevie")
    expect(imgStevie.prop("src")).toEqual(stevie)
  })

  it("checks all image's props for Arnold", () => {
    const imgArnold = about.find("CardImg").at(2)
    expect(imgArnold.prop("alt")).toEqual("arnold")
    expect(imgArnold.prop("src")).toEqual(arnold)
  })
})
