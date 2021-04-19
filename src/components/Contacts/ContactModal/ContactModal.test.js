import React from "react";
import { shallow } from "enzyme";
import ContactModal from "./ContactModal";

describe("ContactModal", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ContactModal />);
    expect(wrapper).toMatchSnapshot();
  });
});
