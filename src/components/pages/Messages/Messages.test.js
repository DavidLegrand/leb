import React from "react";
import { shallow } from "enzyme";
import Messages from "./Messages";

xdescribe("Messages", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Messages />);
    expect(wrapper).toMatchSnapshot();
  });
});
