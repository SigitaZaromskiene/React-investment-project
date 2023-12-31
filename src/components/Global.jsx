import { createContext, useState } from "react";

export const Global = createContext();

export const GlobalProvider = ({ children }) => {
  const [currentSavings, setCurrentSavings] = useState("");
  const [intrest, setIntrest] = useState("");
  const [yearSavings, setYearSavings] = useState("");
  const [investment, setInvestment] = useState("");

  return (
    <Global.Provider
      value={{
        currentSavings,
        setCurrentSavings,
        intrest,
        setIntrest,
        yearSavings,
        setYearSavings,
        investment,
        setInvestment,
      }}
    >
      {children}
    </Global.Provider>
  );
};
