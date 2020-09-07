import React, { useEffect } from "react";
import { expect } from "chai";
import { shallow, mount } from "../testSetup";
import sinon from "sinon";
import { StoreContext } from "./StoreContext";
import { useObserver } from "mobx-react";
import StoreProvider from "./StoreContext";

const TestWrapper = () => {
  const store = React.useContext(StoreContext);
  return useObserver(() => (
    <TestChild score={store.score} increment={store.increment} />
  ));
};

const TestChild = (props) => {
  return (
    <div className="test-child" onClick={props.increment}>
      <span id="score">{props.score}</span>
    </div>
  );
};

describe("<StoreProvider />", () => {
  it("renders <StoreProvider />", () => {
    const wrapper = mount(
      <StoreProvider>
        <TestWrapper className="test-wrapper" />
      </StoreProvider>
    );
    expect(wrapper.find(".test-wrapper").exists()).to.equal(true);
    expect(wrapper.find(".test-child").exists()).to.equal(true);
    expect(wrapper.find(".test-child span").text()).to.equal("0");
  });

  it("renders <StoreProvider />", () => {
    const wrapper = mount(
      <StoreProvider>
        <TestWrapper className="test-wrapper" />
      </StoreProvider>
    );
    wrapper.find(".test-child").simulate("click");
    expect(wrapper.find(".test-child span").text()).to.equal("1");
  });
});
