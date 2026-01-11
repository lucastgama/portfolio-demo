"use client";

import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { SkillContext } from "../../context/skillContext";
import { colors } from "../../lib/global";

interface DowngradeProps {
  title: string;
  description: string;
  value: number;
  icon: string;
  isDowngrade?: boolean;
}

const Downgrade = ({ title, description, value, icon }: DowngradeProps) => {
  const [isActive, setIsActive] = useState(false);
  const router = useRouter();
  const context = useContext(SkillContext);

  if (!context) {
    throw new Error("Downgrade must be used within an ActionProvider");
  }

  const { Downgrade } = context;
  const information = `${title}: ${description}`;

  const handleClick = () => {
    if (title === "Deploy") {
      router.push("/404");
      return;
    }

    setIsActive((current) => !current);
    Downgrade(isActive ? -value : value);
  };

  return (
    <div
      className={`relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-lg cursor-pointer transition-all duration-300 hover:scale-110 ${
        isActive ? 'scale-110' : ''
      }`}
      style={{
        backgroundColor: isActive ? '#dc2626' : colors.secondColor,
        boxShadow: isActive ? '0 0 20px #dc262680' : 'none',
        border: isActive ? '2px solid #dc2626' : `2px solid ${colors.thirdColor}40`,
      }}
      onClick={handleClick}
      title={information}
    >
      <img
        src={icon}
        alt={title}
        className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 object-contain"
        style={{
          filter: isActive ? 'brightness(0) saturate(100%) invert(1)' : 'none',
        }}
      />
    </div>
  );
};

export default Downgrade;