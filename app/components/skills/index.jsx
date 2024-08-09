"use client";

import { useContext, useEffect, useRef, useState } from "react";
import * as S from "./styles";
import ProgressBar from "../progressBar";
import Upgrade from "../upgrade";
import Downgrade from "../downgrade";
import * as v from "../../utils/constants/global";
import Person from "../scene/person";
import { SkillContext } from "../../context/skillContext";
import { useInView } from "framer-motion";
import AnimatedDiv from "../animated/animatedDiv";

const Skills = () => {
  const [skills, setSkills] = useState(v.skills);
  const [upgrades, setUpgrades] = useState(v.upgrade);
  const { downgradeValue } = useContext(SkillContext);
  const profileRef = useRef(null);
  const isInView = useInView(profileRef, { once: false, amount: 0.5 });

  useEffect(() => {
    if (downgradeValue >= 8) {
      setSkills(v.undefinedSkill);
      setUpgrades(v.disabledUpgrade);
    } else {
      setSkills(v.skills);
      setUpgrades(v.upgrade);
    }
  }, [downgradeValue]);

  return (
    <S.Section className="mx-width" ref={profileRef}>
      <AnimatedDiv
        initial={{ opacity: 0, filter: "blur(5px)" }}
        animate={isInView ? { opacity: 1, filter: "blur(0px)" } : {}}
        transition={{ duration: 0.3 }}
      >
        <S.Title>Minhas habilidades</S.Title>
      </AnimatedDiv>
      <S.Container>
        <AnimatedDiv
          initial={{ x: -50, opacity: 0, filter: "blur(5px)" }}
          animate={isInView ? { x: 0, opacity: 1, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.3 }}
        >
          <S.SkillTree>
            <S.Skills>
              {skills.map((skill, index) => (
                <ProgressBar
                  key={index}
                  title={skill.title}
                  value={skill.value}
                />
              ))}
            </S.Skills>
            <S.ContainerUpgrade>
              <S.Upgrades>
                <S.SubTitle>Fortalecimento</S.SubTitle>
                <S.UpgradesTemplate>
                  {upgrades.map((up, index) => (
                    <Upgrade
                      title={up.title}
                      description={up.description}
                      icon={up.icon}
                      value={up.value}
                    />
                  ))}
                </S.UpgradesTemplate>
              </S.Upgrades>
              <S.Upgrades>
                <S.SubTitle>Enfraquecimento</S.SubTitle>
                <S.UpgradesTemplate>
                  {v.downgrade.map((down, index) => (
                    <Downgrade
                      title={down.title}
                      description={down.description}
                      icon={down.icon}
                      isDowngrade={down.isDowngrade}
                      value={down.value}
                    />
                  ))}
                </S.UpgradesTemplate>
              </S.Upgrades>
            </S.ContainerUpgrade>
          </S.SkillTree>
        </AnimatedDiv>
        <AnimatedDiv
          initial={{ x: 50, opacity: 0, filter: "blur(5px)" }}
          animate={isInView ? { x: 0, opacity: 1, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.3 }}
        >
          <S.ContainerModel>
            <Person />
          </S.ContainerModel>
        </AnimatedDiv>
      </S.Container>
    </S.Section>
  );
};

export default Skills;
