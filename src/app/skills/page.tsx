"use client";

import { useContext, useEffect, useRef, useState } from "react";
import ProgressBar from "../components/progressBar";
import Upgrade from "../components/upgrade";
import Downgrade from "../components/downgrade";
import {
  colors,
  skills as skillsData,
  undefinedSkill,
  upgrade,
  disabledUpgrade,
  downgrade,
} from "../lib/global";
import { SkillContext } from "../context/skillContext";
import Person from "../components/scene/person";

const Skills = () => {
  const [skills, setSkills] = useState(skillsData);
  const [upgrades, setUpgrades] = useState(upgrade);
  const { downgradeValue } = useContext(SkillContext);
  const profileRef = useRef(null);

  useEffect(() => {
    if (downgradeValue >= 8) {
      setSkills(undefinedSkill);
      setUpgrades(disabledUpgrade);
    } else {
      setSkills(skillsData);
      setUpgrades(upgrade);
    }
  }, [downgradeValue]);

  return (
    <section
      className="flex items-center flex-col py-12 px-4"
      style={{
        background: `linear-gradient(to bottom right, ${colors.primaryColor}, ${colors.secondColor}, ${colors.primaryColor})`,
      }}
      ref={profileRef}
    >
      <h2
        className="relative w-full flex items-center justify-center uppercase mb-4 font-bold text-center"
        style={{
          fontSize: "clamp(1.4rem, 4vw, 1.8rem)",
          color: colors.accentColor,
        }}
      >
        Minhas habilidades
      </h2>

      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-[4fr_3fr] gap-0 lg:gap-12">
        <div className="flex flex-col">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-x-8 lg:gap-x-12 pr-0 lg:pr-5 mb-4">
            {skills.map((skill, index) => (
              <ProgressBar
                key={index}
                title={skill.title}
                value={skill.value}
              />
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-4 mt-4">
            <div className="flex flex-col items-center">
              <h3
                className="font-bold capitalize mb-3"
                style={{
                  fontSize: "clamp(0.7rem, 1.5vw, 1rem)",
                  color: colors.accentColor,
                }}
              >
                Fortalecimento
              </h3>
              <div className="flex flex-wrap items-start justify-center gap-4 lg:gap-5 py-2">
                {upgrades.map((up, index) => (
                  <Upgrade
                    key={index}
                    title={up.title}
                    description={up.description}
                    icon={up.icon}
                    value={up.value}
                  />
                ))}
              </div>
            </div>

            <div className="flex flex-col items-center">
              <h3
                className="font-bold capitalize mb-3"
                style={{
                  fontSize: "clamp(0.7rem, 1.5vw, 1rem)",
                  color: colors.accentColor,
                }}
              >
                Enfraquecimento
              </h3>
              <div className="flex flex-wrap items-start justify-center gap-4 lg:gap-5 py-2">
                {downgrade.map((down, index) => (
                  <Downgrade
                    key={index}
                    title={down.title}
                    description={down.description}
                    icon={down.icon}
                    isDowngrade={down.isDowngrade}
                    value={down.value}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full self-center justify-self-center mt-8 lg:mt-0 h-[250px] sm:h-[350px] lg:h-[500px]">
          <div
            className="w-full h-full flex items-center justify-center"
            style={{ color: colors.thirdColor }}
          >
            <Person />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
