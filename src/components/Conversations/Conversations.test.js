import React from "react";
import { shallow } from "enzyme";
import Conversations from "./Conversations";

describe("Conversations", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Conversations />);
    expect(wrapper).toMatchSnapshot();
  });
});
