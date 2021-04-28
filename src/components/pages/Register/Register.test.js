import React from "react";
import { shallow } from "enzyme";
import Register from "./Register";

xdescribe("Register", () => {
  it("matches snapshot", () => {
    const wrapper = shallow(<Register />);
    expect(wrapper).toMatchSnapshot();
  });
});
