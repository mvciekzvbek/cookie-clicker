import React from "react";
import { expect } from "chai";
import { shallow, mount } from "../../testSetup";

import Counter from "./Counter";

describe("<Counter/>", () => {
  it("renders <Counter />", () => {
    const wrapper = shallow(<Counter score={0} />);
    expect(wrapper.find("StyledCounter").exists()).to.equal(true);
  });

  it("checks <Counter /> props", () => {
    const wrapper = mount(<Counter score={0} />);
    expect(wrapper.props().score).to.equal(0);
  });

  it("checks if <Counter /> setting props works", () => {
    const wrapper = mount(<Counter score={0} />);
    expect(wrapper.props().score).to.equal(0);
    wrapper.setProps({ score: 11 });
    expect(wrapper.props().score).to.equal(11);
  });
});
