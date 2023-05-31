import React, { createContext, useState, ReactNode, useContext } from "react";

type ToggleContextType = boolean;
type ToggleUpdateContextType = () => void;

const ToggleContext = createContext<ToggleContextType | undefined>(undefined);
const ToggleUpdateContext = createContext<ToggleUpdateContextType | undefined>(undefined);

export const useToggleContext = (): ToggleContextType | undefined => {
  return useContext(ToggleContext);
};

export const useToggleContextUpdate = (): ToggleUpdateContextType | undefined => {
  return useContext(ToggleUpdateContext);
};

type TogglerProviderProps = {
  children: ReactNode;
};

export const TogglerProvider = ({ children }: TogglerProviderProps): JSX.Element => {
  const [viewPortToggle, setViewPortToggle] = useState<boolean>(false);

  const toggleViewPortValue = (): void => {
    setViewPortToggle((prevViewPortToggle) => !prevViewPortToggle);
  };

  return (
    <ToggleContext.Provider value={viewPortToggle}>
      <ToggleUpdateContext.Provider value={toggleViewPortValue}>
        {children}
      </ToggleUpdateContext.Provider>
    </ToggleContext.Provider>
  );
};