import React from "react";

import Enzyme, { shallow } from "enzyme";

import Adapter from "enzyme-adapter-react-16";

import SongNew from "./SongNew.js";

Enzyme.configure({ adapter: new Adapter() });

describe("When SongNew Renders", () => {
  let songNew;
  beforeEach(() => {
    songNew = shallow(<SongNew />);
  });
  it("displays a heading", () => {
    const heading = songNew.find("h2");
    expect(heading.text()).toEqual("Create");
  });
  it("displays a form", () => {
    const form = songNew.find("Form");
    expect(form.length).toEqual(1);
  });
});
