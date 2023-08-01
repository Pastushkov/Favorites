import React, { useContext, useReducer, FC, createContext, Dispatch } from "react";
import { actions } from "./actionTypes";
import { State, Type } from "./type";

const initialState: State = {
  list: [],
  favorites: [],
  isLoading: false,
  selectedItem: null,
};

const reducer = (state = initialState, action: Type): State => {
  switch (action.type) {
    case actions.FETCH_PRODUCTS_LIST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case actions.SET_PRODUCTS_LIST: {
      return {
        ...state,
        list: action.payload,
        isLoading: false,
      };
    }
    case actions.FETCH_PRODUCT_BY_ID: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case actions.SET_PRODUCT_BY_ID: {
      return {
        ...state,
        isLoading: false,
        selectedItem: action.payload,
      };
    }
    case actions.ADD_TO_FAVORITES: {
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    }
    case actions.REMOVE_FROM_FAVOITES: {
      return {
        ...state,
        favorites: [
          ...state.favorites.filter((item) => item.id !== action.payload),
        ],
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

const StateContext = createContext<State | undefined>(undefined);
const DispatchContext = createContext<Dispatch<Type> | undefined>(undefined);

export const StateProvider: FC<{children: React.ReactNode}> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

export const useStateContext = () => {
  const context = useContext(StateContext);
  if (context === undefined) {
    throw new Error("useStateContext must be used within a StateProvider");
  }
  return context;
};

export const useDispatchContext = () => {
  const context = useContext(DispatchContext);
  if (context === undefined) {
    throw new Error("useDispatchContext must be used within a StateProvider");
  }
  return context;
};
