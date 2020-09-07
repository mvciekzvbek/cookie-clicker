import CookieContainer from "./CookieContainer";
import React from "react";
import { expect } from "chai";
import { mount } from "../testSetup";
import StoreProvider from "./../contexts/StoreContext";

describe("<CookieContainer/>", () => {
  it("Child components should exist in DOM", () => {
    const wrapper = mount(
      <StoreProvider>
        <CookieContainer />
      </StoreProvider>
    );
    expect(wrapper.find("StyledCookie").exists()).to.equal(true);
    expect(wrapper.find("StyledConfetti").exists()).to.equal(true);
  });
});
