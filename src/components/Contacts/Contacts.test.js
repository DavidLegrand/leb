import React from "react";
import { shallow } from "enzyme";
import Contacts from "./Contacts";

describe("Contacts", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Contacts />);
    expect(wrapper).toMatchSnapshot();
  });
});
