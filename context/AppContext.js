import React, {createContext, useState} from 'react';

export const AppContext = createContext();

export const AppProvider = ({children}) => {
  const [copiedColor, setCopiedColor] = useState('');

  return (
    <AppContext.Provider value={{copiedColor, setCopiedColor}}>
      {children}
    </AppContext.Provider>
  );
};
