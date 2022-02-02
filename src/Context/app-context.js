import React, { createContext, useContext, useReducer } from "react";
import reducer from "./reducer";
import { OPEN_MENU, CLOSE_MENU } from "./actions";

const initialState = {
   isMenuOpen: false,
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
   const [state, dispatch] = useReducer(reducer, initialState);

   //  action creators go here

   const openMenu = () => {
      dispatch({ type: OPEN_MENU });
   };
   const closeMenu = () => {
      dispatch({ type: CLOSE_MENU });
   };

   return (
      <AppContext.Provider value={{ ...state, openMenu, closeMenu }}>
         {children}
      </AppContext.Provider>
   );
};

export const useGlobalContext = () => {
   return useContext(AppContext);
};

export { AppProvider };
