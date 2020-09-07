import React from "react";
import { useLocalStore } from "mobx-react";
import { use } from "chai";
import { createStore } from "./createStore";

export const StoreContext = React.createContext();

const StoreProvider = ({ children }) => {
  const store = useLocalStore(createStore);

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export default StoreProvider;
