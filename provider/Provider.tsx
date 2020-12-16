import React, {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useMemo,
  useReducer,
} from "react";

enum ActionTypes {
  setIsSearchOpen = "SET_IS_SEARCH_OPEN",
  setCurrentLocal = "SET_CURRENT_LOCAL",
  setSearch = "SET_SEARCH",
}

type LocalObject = {
  city: string;
  date: string;
  temperature: number;
  climate: string;
  wind: number;
  hum: number;
};

type State = {
  isSearchOpen: boolean;
  currentLocal: LocalObject;
  search: string;
};

type Actions = {
  type: ActionTypes;
  payload?: any;
};

const Context = createContext<[State, Dispatch<Actions>] | null>(null);

export const useAppInfo = () => {
  const context = useContext(Context);

  if (!context) {
    throw new Error("useAppInfo must be used inside a provider");
  }

  const [state, dispatch] = context;

  const setIsSearchOpen = (isSearchOpen: boolean) => {
    dispatch({ type: ActionTypes.setIsSearchOpen, payload: isSearchOpen });
  };

  return {
    state,
    setIsSearchOpen,
  };
};

export const useWeather = () => {
  const context = useContext(Context);

  if (!context) {
    throw new Error("useWeather must be used inside a provider");
  }

  const [state, dispatch] = context;

  const setCurrentLocal = (local: LocalObject) => {
    dispatch({ type: ActionTypes.setCurrentLocal, payload: local });
  };

  const setSearch = (local: string) => {
    dispatch({ type: ActionTypes.setSearch, payload: local });
  };

  return {
    state,
    setCurrentLocal,
    setSearch,
  };
};

const reducer = (state: State, { type, payload }: Actions) => {
  switch (type) {
    case ActionTypes.setIsSearchOpen:
      return {
        ...state,
        isSearchOpen: payload,
      };
    case ActionTypes.setCurrentLocal:
      return {
        ...state,
        currentLocal: payload,
      };
    case ActionTypes.setSearch:
      return {
        ...state,
        search: payload,
      };
  }
};

const initialState: State = {
  isSearchOpen: false,
  currentLocal: {
    city: "",
    date: "",
    temperature: 0,
    climate: "",
    wind: 0,
    hum: 0,
  },
  search: "California",
};

const Provider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { state: memoState, dispatch: memoDispatch } = useMemo(
    () => ({ state, dispatch }),
    [state]
  );

  return (
    <Context.Provider value={[memoState, memoDispatch]}>
      {children}
    </Context.Provider>
  );
};

export default Provider;
