import { useState, useEffect } from "react";
import { createContext } from "react";
import { IAppContext, IAppProvider } from "./interfaces";

const githubUrlUser = import.meta.env.GITHUB_URL;
export const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};
