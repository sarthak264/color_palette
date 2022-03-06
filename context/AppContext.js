import React, {createContext, useState} from 'react';

export const AppContext = createContext();

export const AppProvider = ({children}) => {
  const [copeiedColor, setCopeiedColor] = useState('');

  return (
    <AppContext.Provider value={{copeiedColor, setCopeiedColor}}>
      {children}
    </AppContext.Provider>
  );
};
