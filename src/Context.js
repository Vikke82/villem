import React, { createContext, useState, useContext } from "react";

const Context = createContext();

export const useLanguage = () => useContext(Context);

export const Provider = ({ children }) => {
  const [language, setLanguage] = useState("fi"); // Oletuskieli

  const changeLanguage = (lang) => setLanguage(lang);

  return (
    <Context.Provider value={{ language, changeLanguage }}>
      {children}
    </Context.Provider>
  );
};
