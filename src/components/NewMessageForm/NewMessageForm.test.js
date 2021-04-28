import React from "react";
import { shallow } from "enzyme";
import NewMessageForm from "./NewMessageForm";

xdescribe("NewMessageForm", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<NewMessageForm />);
    expect(wrapper).toMatchSnapshot();
  });
});
