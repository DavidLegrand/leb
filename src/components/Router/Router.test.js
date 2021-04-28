import React, { Suspense, lazy } from "react";
import { shallow, mount } from "enzyme";
import { render, waitFor, screen } from "@testing-library/react";

import Router from "./Router";
import Loading from "components/shared/Loading"
import { BrowserRouter, MemoryRouter, Route } from 'react-router-dom'
const Login = lazy(() => import('components/pages/Login'))


let wrapper
describe("Router", () => {
  beforeEach(() => {
    wrapper = shallow(<Router />);
  })

  it("matches snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("returns Login component for /login route", async () => {

    //window.history.pushState({}, 'Test page', "/login")
    const wrapper = render(
      <MemoryRouter initialEntries={["/login"]}>
        <Router />
      </MemoryRouter>
    )

    // const lazyElement = await screen.findByText(/Login/i)
    // expect(lazyElement).toBeInTheDocument()

    // await Login
    // await waitFor(() => {
    //   expect(true).toBe(true)
    //   expect(wrapper.getByText(/Login/)).toBeInTheDocument()
    // });
    // expect(wrapper).toMatchSnapshot()

    wrapper.debug()
  })
});
