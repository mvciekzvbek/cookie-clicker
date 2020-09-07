import React from "react";
import { expect } from "chai";
import { shallow } from "../../testSetup";

import sinon from "sinon";

import Cookie from "./Cookie";

describe("<Cookie />", () => {
  it("renders <Cookie />", () => {
    const handleClick = sinon.spy();
    const wrapper = shallow(<Cookie handleClick={handleClick} />);
    expect(handleClick).to.have.property("callCount", 0);
    expect(wrapper.find("StyledCookie").exists()).to.equal(true);
  });

  it("renders three <Cookie /> components", () => {
    const handleClick = sinon.spy();
    const wrapper = shallow(<Cookie handleClick={handleClick} />);
    wrapper.find("StyledCookie").simulate("click");
    expect(handleClick).to.have.property("callCount", 1);
  });
});
