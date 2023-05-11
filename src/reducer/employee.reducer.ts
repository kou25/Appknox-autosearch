import { StateContext } from "../provider/StateProvide";

export type userType = {
  id: number;
  name: string;
  email: string;
  address: address;
  phone: string;
  website: string;
  company: company;
};

type address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
};

type company = {
  name: string;
};

export enum SearchActionKind {
  SEARCH = "SEARCH",
  HISTORY = "HISTORY"
}

export type SearchAction =
  | {
      type: SearchActionKind.SEARCH;
      payload: userType[];
    }
  | { type: SearchActionKind.HISTORY; payload: string };

export const initialState: userType[] = [];

export const reducer = (state: StateContext, action: SearchAction) => {
  switch (action.type) {
    case SearchActionKind.SEARCH: {
      const allUsers = [...action.payload];
      return {
        ...state,
        users: allUsers
      };
    }

    case SearchActionKind.HISTORY:
      return {
        ...state,
        history: !state.history.includes(action.payload)
          ? [action.payload].concat(state.history)
          : state.history
      };

    default:
      throw new Error("Not among actions");
  }
};
