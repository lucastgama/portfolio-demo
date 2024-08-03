"use client";

import React, { createContext, useState } from "react";

const defaultValue = {
  bonusValue: 0,
  downgradeValue: 0,
  setBonusValue: () => {},
  setDowngradeValue: () => {},
  Upgrade: () => {},
  Downgrade: () => {},
};

export const SkillContext = createContext(defaultValue);

const SkillProvider = ({ children }) => {
  const [bonusValue, setBonusValue] = useState(0);
  const [downgradeValue, setDowngradeValue] = useState(0);

  const Upgrade = (value) => {
    setBonusValue((prevValue) => prevValue + value);
  };
  const Downgrade = (value) => {
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
