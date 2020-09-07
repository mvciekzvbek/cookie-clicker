import React from "react";
import StoreProvider from "./contexts/StoreContext";
import ScoreboardContainer from "./containers/ScoreboardContainer";
import CookieContainer from "./containers/CookieContainer";
import NotificationContainer from "./containers/NotificationContainer";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <StoreProvider>
        <ScoreboardContainer />
        <CookieContainer />
        <NotificationContainer />
      </StoreProvider>
    </div>
  );
}
