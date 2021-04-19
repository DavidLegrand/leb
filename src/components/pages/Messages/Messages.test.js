import React from "react";
import { shallow } from "enzyme";
import Messages from "./Messages";

describe("Messages", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Messages />);
    expect(wrapper).toMatchSnapshot();
  });
});
