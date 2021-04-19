import React from "react";
import { shallow } from "enzyme";
import NewMessageForm from "./NewMessageForm";

describe("NewMessageForm", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<NewMessageForm />);
    expect(wrapper).toMatchSnapshot();
  });
});
