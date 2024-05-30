'use client'

import React, { createContext, useState, PropsWithChildren } from "react";

interface SkillContextProps {
  bonusValue: number;
  downgradeValue: number;
  setBonusValue: React.Dispatch<React.SetStateAction<number>>;
  setDowngradeValue: React.Dispatch<React.SetStateAction<number>>;
  Upgrade: (value: number) => void;
  Downgrade: (value: number) => void;
}

const defaultValue: SkillContextProps = {
  bonusValue: 0,
  downgradeValue: 0,
  setBonusValue: () => {},
  setDowngradeValue: () => {},
  Upgrade: () => {},
  Downgrade: () => {},
};

export const SkillContext = createContext<SkillContextProps>(defaultValue);

export const SkillProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
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
      value={{ setBonusValue, bonusValue, setDowngradeValue, downgradeValue, Upgrade, Downgrade }}
    >
      {children}
    </SkillContext.Provider>
  );
};
