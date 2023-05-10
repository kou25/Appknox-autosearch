import { useContext, useReducer } from "react";

import React from "react";
import {
  SearchAction,
  initialState,
  reducer,
  userType
} from "../reducer/employee.reducer";

export interface StateContext {
  users: userType[];
  history: string[];
}

export interface Store {
  state: StateContext;
  dispatch?: React.Dispatch<SearchAction>;
}

const defaultState: StateContext = { users: initialState, history: [] };

const myContext = React.createContext<Store>({ state: defaultState });

export const useStateContext = () => useContext(myContext);

export const StateProvider = ({ children }: { children: JSX.Element }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  return (
    <myContext.Provider value={{ state, dispatch }}>
      {children}
    </myContext.Provider>
  );
};
