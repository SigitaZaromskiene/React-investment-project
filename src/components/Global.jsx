import { createContext, useState } from "react";

export const Global = createContext();

export const GlobalProvider = ({ children }) => {
  const [currentSavings, setCurrentSavings] = useState("");
  const [intrest, setIntrest] = useState("");
  const [yearSavings, setYearSavings] = useState("");
  const [investment, setInvestment] = useState("");
  const [data, setData] = useState("");

  console.log(data);

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
        setData,
      }}
    >
      {children}
    </Global.Provider>
  );
};
