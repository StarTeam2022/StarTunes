import React from "react";

import Enzyme, { shallow } from "enzyme";

import Adapter from "enzyme-adapter-react-16";

import SongEdit from "./SongEdit";

Enzyme.configure({ adapter: new Adapter() });

describe("When SongEdit renders", () => {
  let song = {
    title: "test title",
    artist: "test artist",
    image: "test image"
  }
  const edit = shallow(<SongEdit song={song} />);

  it("displays an h2", () => {
    const songEditHeading = edit.find("h2").text();
    expect(songEditHeading).toEqual("Update or Delete Song Information");
  });

  it("displays a song form", () => {
    const songForm = edit.find("Form");
    expect(songForm.length).toEqual(1);
  });

  it("displays song title", () => {
    const inputTitle = edit.find('[type="text"]').get(0).props.value
    expect(inputTitle).toEqual('test title')
  })
  it("displays song artist", () => {
    const inputArtist = edit.find('[type="text"]').get(1).props.value
    expect(inputArtist).toEqual('test artist')
  })
  it("displays song image", () => {
    const inputImage = edit.find('[type="text"]').get(2).props.value
    expect(inputImage).toEqual('test image')
  })
});
