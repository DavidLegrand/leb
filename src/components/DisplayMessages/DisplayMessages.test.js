import React from "react";
import { shallow } from "enzyme";
import DisplayMessages from "./DisplayMessages";

describe("DisplayMessages", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<DisplayMessages />);
    expect(wrapper).toMatchSnapshot();
  });
});
