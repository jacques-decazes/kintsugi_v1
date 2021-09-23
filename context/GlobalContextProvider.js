import React, { createContext, useReducer, useContext, useState } from 'react';

///////////////////////////////////////////////////////////////////////////////////

//________ Define Conext ________
const GlobalStateContext = createContext();
const GlobalDispatchContext = createContext();

//________ Reducer ________
const globalReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_TRANSITION': {
      return {
        ...state,
        toggleTransition: !state.toggleTransition,
      };
    }
    case 'TOGGLE_THEME': {
      return {
        ...state,
        currentTheme: action.theme,
      };
    }
    case 'TOGGLE_COLOR': {
      return {
        ...state,
        color: action.color,
      };
    }
    case 'CURSOR_TYPE': {
      return {
        ...state,
        cursorType: action.cursorType,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

//________ Provider ________
export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, {
    toggleTransition: false,
    currentTheme: 'dark',
    color: '#fff816',
    cursorType: false,
    cursorStyles: ['pointer', 'hovered', 'locked', 'white'],
  });

  return (
    <GlobalDispatchContext.Provider value={dispatch}>
      <GlobalStateContext.Provider value={state}>
        {children}
      </GlobalStateContext.Provider>
    </GlobalDispatchContext.Provider>
  );
};

//________ custom hooks for when we want to use our global state ________
export const useGlobalStateContext = () => useContext(GlobalStateContext);

export const useGlobalDispatchContext = () => useContext(GlobalDispatchContext);
