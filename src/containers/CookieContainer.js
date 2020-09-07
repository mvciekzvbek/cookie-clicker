import React from "react";
import Cookie from "../components/Cookie/index";
import { StoreContext } from "./../contexts/StoreContext";
import Confetti from "./../components/Confetti";
import { useObserver } from "mobx-react";

const CookieContainer = () => {
  const store = React.useContext(StoreContext);

  return useObserver(() => (
    <>
      <Cookie handleClick={store.increment} />
      <Confetti
        level={store.level}
        score={store.score}
        nextBreakingPoint={store.nextBreakingPoint}
      />
    </>
  ));
};

export default CookieContainer;
