import React from "react";
import { shallow } from "enzyme";
import ConversationModal from "./ConversationModal";

xdescribe("ConversationModal", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ConversationModal />);
    expect(wrapper).toMatchSnapshot();
  });
});
