import React from "react";
import { expect } from "chai";
import { mount } from "../testSetup";
import StoreProvider from "./../contexts/StoreContext";
import ScoreboardContainer from "./ScoreboardContainer";

describe("<ScoreboardContainer/>", () => {
  it("Child components should exist in DOM", () => {
    const wrapper = mount(
      <StoreProvider>
        <ScoreboardContainer />
      </StoreProvider>
    );
    expect(wrapper.find("StyledCounter").exists()).to.equal(true);
    expect(wrapper.find("StyledLevel").exists()).to.equal(true);
  });
});
