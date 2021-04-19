import React from "react";
import { shallow } from "enzyme";
import UseTitle from "./UseTitle";

describe("UseTitle", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<UseTitle />);
    expect(wrapper).toMatchSnapshot();
  });
});
