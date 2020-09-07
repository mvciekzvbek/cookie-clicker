import { expect } from "chai";
import { createStore } from "./createStore";

describe("store tests", () => {
  it("should create store with default params", () => {
    const store = createStore();

    expect(store.score).to.equal(0);
    expect(store.level).to.equal(1);
    expect(store.nextBreakingPoint).to.equal(10);
    expect(store.achievements).to.deep.equal([]);
    expect(typeof store.increment).to.equal("function");
    expect(typeof store.addAchievement).to.equal("function");
  });

  it("should increment score by one", () => {
    const store = createStore();
    expect(store.score).to.equal(0);
    store.increment();
    expect(store.score).to.equal(1);
  });

  it("should change next breaking point to 20", () => {
    const store = createStore();
    store.score = 9;
    store.increment();
    expect(store.score).to.equal(10);
    expect(store.nextBreakingPoint).to.equal(20);
  });

  it("should change level to 2", () => {
    const store = createStore();
    store.score = 9;
    expect(store.level).to.equal(1);
    store.increment();
    expect(store.score).to.equal(10);
    expect(store.level).to.equal(2);
  });

  it("should change next breaking point to 20", () => {
    const store = createStore();
    expect(store.achievements).to.deep.equal([]);
    const achievement = {
      score: 25,
      message: "Nice start!"
    };
    store.addAchievement(achievement);
    expect(store.achievements[0]).to.deep.equal(achievement);
  });
});
