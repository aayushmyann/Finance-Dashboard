import { createContext, useContext, useState, useEffect } from "react";
import { initialTransactions } from "../data/mockData";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [transactions, setTransactions] = useState(initialTransactions);
  const [role, setRole] = useState("viewer");

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <AppContext.Provider value={{ transactions, setTransactions, role, setRole }}>
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);