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
}

type State = {
  isSearchOpen: boolean;
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

const reducer = (state: State, { type, payload }: Actions) => {
  switch (type) {
    case ActionTypes.setIsSearchOpen:
      return {
        ...state,
        isSearchOpen: payload,
      };
  }
};

const initialState: State = {
  isSearchOpen: false,
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
