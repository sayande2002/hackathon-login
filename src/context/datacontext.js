import React, { createContext, useState } from "react";

export const DataContext = createContext();

const Dataprovider = ({ children }) => {
  const [fields, setFields] = useState();
  return (
    <DataContext.Provider value={{ fields, setFields }}>
      {children}
    </DataContext.Provider>
  );
};

export default Dataprovider;
