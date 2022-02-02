import React, { createContext, useContext, useReducer } from "react";
import reducer from "./reducer";

const initialState = {
   isDarkMode: true,
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
   const [state, dispatch] = useReducer(reducer, initialState);

   //  action creators go here

   return (
      <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
   );
};

export const useGlobalContext = () => {
   return useContext(AppContext);
};

export { AppProvider };
