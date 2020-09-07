import React from "react";
import { useObserver } from "mobx-react";
import { StoreContext } from "../contexts/StoreContext";
import Scoreboard from "../components/Scoreboard";
import Level from "../components/Level/";
import Counter from "../components/Counter/";

const ScoreboardContainer = () => {
  const store = React.useContext(StoreContext);

  return useObserver(() => (
    <Scoreboard>
      <Counter score={store.score} />
      <Level level={store.level} />
    </Scoreboard>
  ));
};

export default ScoreboardContainer;
