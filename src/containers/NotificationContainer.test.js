import React from "react";
import { expect } from "chai";
import { mount } from "../testSetup";
import StoreProvider from "./../contexts/StoreContext";
import NotificationContainer from "./NotificationContainer";

describe("<NotificationContainer/>", () => {
  it("Child components should exist in DOM", () => {
    const wrapper = mount(
      <StoreProvider>
        <NotificationContainer />
      </StoreProvider>
    );
    expect(wrapper.find("StyledNotification").exists()).to.equal(true);
  });
});
