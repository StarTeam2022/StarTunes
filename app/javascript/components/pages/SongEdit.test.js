import React from "react";

import Enzyme, { shallow } from "enzyme";

import Adapter from "enzyme-adapter-react-16";

import SongEdit from "./SongEdit";

Enzyme.configure({ adapter: new Adapter() });

describe("When SongEdit renders", () => {
  it("displays an h2", () => {
    const edit = shallow(<SongEdit />);
    const songEditHeading = edit.find("h2").text();
    expect(songEditHeading).toEqual("Update or Delete Song Information");
  });
});