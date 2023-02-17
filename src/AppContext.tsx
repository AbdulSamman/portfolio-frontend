import { createContext } from "react";

export const AppContext = createContext<any>({} as any);

export const AppProvider: React.FC<any> = ({ children }) => {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};
