'use client'

import { useContext, useEffect, useState } from "react";
import * as S from "./styles";
import ProgressBar from "../progressBar";
import Upgrade from "../upgrade";
import Downgrade from "../downgrade/index";
import * as v from "@/app/lib/variable/variables";
import Person from "../scene/person";
import { SkillContext } from "@/app/context/skillContext";

const Skills = () => {
  const [skills, setSkills] = useState(v.skills);
  const [upgrades, setUpgrades] = useState(v.upgrade);
  const { downgradeValue } = useContext(SkillContext);

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
    <S.Section id="habilidades" className="mx-width">
      <S.Title>Habilidades</S.Title>
      <S.Container >
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
                    key={index}
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
                    key={index}
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
        <S.ContainerModel>
          <Person />
        </S.ContainerModel>
      </S.Container>
    </S.Section>
  );
};

export default Skills;
