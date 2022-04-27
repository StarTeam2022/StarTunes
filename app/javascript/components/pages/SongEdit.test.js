import React from "react";

import Enzyme, { shallow } from "enzyme";

import Adapter from "enzyme-adapter-react-16";

import SongEdit from "./SongEdit";

Enzyme.configure({ adapter: new Adapter() });

describe("When SongEdit renders", () => {
  let song = {
    title: "test title",
    artist: "test artist"
  }
  const edit = shallow(<SongEdit song={song} />);

  it("displays an h2", () => {
    const songEditHeading = edit.find("h2").text();
    expect(songEditHeading).toEqual("Update or Delete Song Information");
  });

  xit("displays song title", () => {
    const titleInput = edit.find("input").get(0)
    console.log(titleInput)
  })
});
