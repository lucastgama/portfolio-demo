"use client";

import React, { createContext, useState, ReactNode } from "react";

interface SkillContextType {
  bonusValue: number;
  downgradeValue: number;
  setBonusValue: (value: number | ((prev: number) => number)) => void;
  setDowngradeValue: (value: number | ((prev: number) => number)) => void;
  Upgrade: (value: number) => void;
  Downgrade: (value: number) => void;
}

const defaultValue: SkillContextType = {
  bonusValue: 0,
  downgradeValue: 0,
  setBonusValue: () => {},
  setDowngradeValue: () => {},
  Upgrade: () => {},
  Downgrade: () => {},
};

export const SkillContext = createContext<SkillContextType>(defaultValue);

interface SkillProviderProps {
  children: ReactNode;
}

const SkillProvider = ({ children }: SkillProviderProps) => {
  const [bonusValue, setBonusValue] = useState<number>(0);
  const [downgradeValue, setDowngradeValue] = useState<number>(0);

  const Upgrade = (value: number) => {
    setBonusValue((prevValue) => prevValue + value);
  };

  const Downgrade = (value: number) => {
    setDowngradeValue((prevValue) => prevValue + value);
  };

  return (
    <SkillContext.Provider
      value={{
        setBonusValue,
        bonusValue,
        setDowngradeValue,
        downgradeValue,
        Upgrade,
        Downgrade,
      }}
    >
      {children}
    </SkillContext.Provider>
  );
};

export default SkillProvider;
