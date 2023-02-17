import { createContext } from "react";
import React, { useRef, useEffect } from "react";
export const AppContext = createContext<any>({} as any);

export const AppProvider: React.FC<any> = ({ children }) => {
  const homeRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (window.location.hash === "#home" && homeRef.current) {
      homeRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (window.location.hash === "#projects" && projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (window.location.hash === "#skills" && skillsRef.current) {
      skillsRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (window.location.hash === "#contact" && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <AppContext.Provider
      value={{ homeRef, projectsRef, skillsRef, contactRef }}
    >
      {children}
    </AppContext.Provider>
  );
};
