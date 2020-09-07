import React from "react";
import { useObserver } from "mobx-react";
import { StoreContext } from "../contexts/StoreContext";
import Notification from "../components/Notification";

const NotificationContainer = () => {
  const store = React.useContext(StoreContext);

  return useObserver(() => (
    <Notification
      score={store.score}
      achievements={store.achievements}
      addAchievement={store.addAchievement}
    />
  ));
};

export default NotificationContainer;
