import React from "react";
import { expect } from "chai";
import { shallow, mount } from "../../testSetup";

import Level from "./Level";

describe("<Level/>", () => {
  it("renders <Level />", () => {
    const wrapper = shallow(<Level level={1} />);
    expect(wrapper.find("StyledLevel").exists()).to.equal(true);
  });

  it("checks <Level /> props", () => {
    const wrapper = mount(<Level level={0} />);
    expect(wrapper.props().level).to.equal(0);
  });

  it("checks if <Level /> setting props works", () => {
    const wrapper = mount(<Level level={0} />);
    expect(wrapper.props().level).to.equal(0);
    wrapper.setProps({ level: 11 });
    expect(wrapper.props().level).to.equal(11);
  });
});
