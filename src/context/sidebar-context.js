import React, { useContext, useReducer } from 'react';
import reducer from './reducer';

const initialState = {
  isSidebarOpen: false,
};

const SidebarContext = React.createContext();

export const SidebarProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <SidebarContext.Provider value={{ ...state }}>
      {children}
    </SidebarContext.Provider>
  );
};

const useSidebarContext = () => useContext(SidebarContext);
export default useSidebarContext;
