// DataContext.js
import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [aguaSalva, setAguaSalva] = useState(0);
  const [quantidadeAdicional, setQuantidadeAdicional] = useState(50);

  const values = {
    aguaSalva,
    setAguaSalva,
    quantidadeAdicional,
    setQuantidadeAdicional,
  };

  return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
};

export const useDataContext = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useDataContext must be used within a DataProvider');
  }
  return context;
};
