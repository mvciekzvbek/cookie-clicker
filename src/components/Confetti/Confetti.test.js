import React from "react";
import { expect } from "chai";
import { shallow, mount } from "../../testSetup";

import Confetti from "./Confetti";

describe("<Confetti />", () => {
  it("renders <Confetti />", () => {
    const wrapper = shallow(<Confetti score={0} nextBreakingPoint={10} />);
    expect(wrapper.find("StyledConfetti").exists()).to.equal(true);
  });

  it("checks <Confetti /> props", () => {
    const wrapper = mount(<Confetti score={0} nextBreakingPoint={10} />);
    expect(wrapper.props().score).to.equal(0);
    expect(wrapper.props().nextBreakingPoint).to.equal(10);
  });

  it("checks if <Confetti /> setting props works", () => {
    const wrapper = mount(<Confetti score={0} nextBreakingPoint={10} />);
    expect(wrapper.props().score).to.equal(0);
    expect(wrapper.props().nextBreakingPoint).to.equal(10);
    wrapper.setProps({ score: 11, nextBreakingPoint: 20 });
    expect(wrapper.props().score).to.equal(11);
    expect(wrapper.props().nextBreakingPoint).to.equal(20);
  });
});
