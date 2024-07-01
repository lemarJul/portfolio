import React, { createContext, useState, useContext, useMemo } from "react";

const AppContext = createContext(undefined);

export const AppContextProvider = ({ children }) => {
  const [textContent, setTextContent] = useState("hello world!");
  const [showAbout, setShowAbout] = useState(false);

  return useMemo(
    () => (
      <AppContext.Provider
        value={{
          textContent,
          setTextContent,
          showAbout,
          setShowAbout,
        }}
      >
        {children}
      </AppContext.Provider>
    ),
    [textContent, showAbout]
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within a AppProvider");
  }
  return context;
};
