"use client";

import { useContext, useState, useEffect } from "react";
import { SkillContext } from "../../context/skillContext";
import { colors } from "../../lib/global";

interface UpgradeProps {
  title: string;
  description: string;
  icon: string;
  value: number;
}

const Upgrade = ({ title, description, icon, value }: UpgradeProps) => {
  const [isActive, setIsActive] = useState(false);
  const { Upgrade, downgradeValue, setBonusValue } = useContext(SkillContext);

  const information = `${title}: ${description}`;

  const handleClick = () => {
    if (downgradeValue <= 4) {
      setIsActive((current) => !current);
      const newValue = isActive ? -value : value;
      Upgrade(newValue);
    }
  };

  useEffect(() => {
    if (downgradeValue >= 4) {
      setIsActive(false);
      setBonusValue(0);
    }
  }, [downgradeValue, setBonusValue]);

  return (
    <div
      className={`relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-lg cursor-pointer transition-all duration-300 hover:scale-110 ${
        isActive ? 'scale-110' : ''
      }`}
      style={{
        backgroundColor: isActive ? colors.categoryColor : colors.secondColor,
        boxShadow: isActive ? `0 0 20px ${colors.categoryColor}80` : 'none',
        border: isActive ? `2px solid ${colors.categoryColor}` : `2px solid ${colors.thirdColor}40`,
      }}
      onClick={handleClick}
      title={information}
    >
      <img
        src={icon}
        alt={title}
        className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 object-contain"
        style={{
          filter: isActive ? 'brightness(0) saturate(100%)' : 'none',
        }}
      />
    </div>
  );
};

export default Upgrade;