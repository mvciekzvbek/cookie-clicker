import React from "react";
import { act } from "react-dom/test-utils";
import { expect } from "chai";
import { shallow, mount } from "../../testSetup";
import sinon from "sinon";

import Notification from "./Notification";
import { ACHIEVEMENTS } from "../../config/config";

describe("<Notification/>", () => {
  it("renders <Notification />", () => {
    const addAchievement = sinon.spy();
    const wrapper = shallow(
      <Notification
        score={0}
        addAchievement={addAchievement}
        achievements={[]}
      />
    );
    expect(wrapper.find("StyledNotification").exists()).to.equal(true);
  });

  it("checks <Notification /> props", () => {
    const addAchievement = sinon.spy();
    const wrapper = mount(
      <Notification
        score={0}
        addAchievement={addAchievement}
        achievements={[]}
      />
    );
    expect(wrapper.props().achievements).to.deep.equal([]);
  });

  it("checks if <Notification /> setting props works", () => {
    const addAchievement = sinon.spy();
    const wrapper = mount(
      <Notification
        score={0}
        addAchievement={addAchievement}
        achievements={[]}
      />
    );

    expect(wrapper.props().score).to.equal(0);

    act(() => {
      wrapper.setProps({
        score: 25,
        achievements: [],
        addAchievement: addAchievement
      });
    });
    expect(wrapper.props().score).to.equal(25);
    expect(addAchievement).to.have.property("callCount", 1);
    expect(addAchievement.getCalls()["0"].args["0"]).to.deep.equal(
      ACHIEVEMENTS[0]
    );
  });

  it("checks if <Notification /> setting props works", () => {
    const addAchievement = sinon.spy();
    const wrapper = mount(
      <Notification
        score={0}
        addAchievement={addAchievement}
        achievements={[]}
      />
    );

    expect(wrapper.props().score).to.equal(0);
    act(() => {
      wrapper.setProps({
        score: 50,
        achievements: [],
        addAchievement: addAchievement
      });
    });
    expect(wrapper.props().score).to.equal(50);
    expect(addAchievement).to.have.property("callCount", 2);
    expect(addAchievement.getCalls()["0"].args["0"]).to.deep.equal(
      ACHIEVEMENTS[0]
    );
    expect(addAchievement.getCalls()["1"].args["0"]).to.deep.equal(
      ACHIEVEMENTS[1]
    );
  });
});
