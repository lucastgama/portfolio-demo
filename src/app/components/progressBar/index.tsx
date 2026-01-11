"use client";

import { useContext, useEffect, useState } from "react";
import { SkillContext } from "../../context/skillContext";
import { colors } from "../../lib/global";

interface ProgressBarProps {
  title: string;
  value: number;
}

const ProgressBar = ({ title, value }: ProgressBarProps) => {
  const [bonusWidth, setBonusWidth] = useState(0);
  const [bonus, setBonus] = useState(0);
  const { bonusValue, downgradeValue } = useContext(SkillContext);

  useEffect(() => {
    const newBonusWidth = Math.min(value + bonusValue, 100);
    setBonusWidth(newBonusWidth);
  }, [value, bonusValue]);

  useEffect(() => {
    const maxBonus = 100 - value;
    const clampedBonusValue = Math.min(bonusValue, maxBonus);
    setBonus(downgradeValue < 4 ? clampedBonusValue : 0);
  }, [bonusValue, downgradeValue, value]);

  return (
    <div className="w-full mb-6 lg:mb-8">
      <div className="flex items-center justify-between mb-2">
        <span
          className="font-normal"
          style={{
            color: colors.accentColor,
            fontSize: "clamp(0.7rem, 1.5vw, 1rem)",
          }}
        >
          {title}
        </span>
        <span
          className="font-light"
          style={{
            color: colors.accentColor,
            fontSize: "clamp(0.7rem, 1.5vw, 0.9rem)",
          }}
        >
          {value === 0 ? "NaN" : value}
          {bonus > 0 && (
            <span style={{ color: colors.categoryColor }}> + {bonus}</span>
          )}
          %
        </span>
      </div>

      <div
        className="relative w-full h-2 rounded-full overflow-hidden"
        style={{ backgroundColor: colors.secondColor }}
      >
        <div
          className="absolute h-full transition-all duration-500 ease-out"
          style={{
            width: `${value}%`,
            backgroundColor: colors.accentColor,
          }}
        />
        {bonus > 0 && (
          <div
            className="absolute h-full transition-all duration-500 ease-out"
            style={{
              width: `${bonusWidth}%`,
              backgroundColor: colors.categoryColor,
            }}
          />
        )}
      </div>
    </div>
  );
};

export default ProgressBar;
