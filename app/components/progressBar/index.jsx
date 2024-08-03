import { useContext, useEffect, useState } from "react";
import { SkillContext } from "../../context/skillContext";
import * as S from "./styles";

const ProgressBar = ({ title, value }) => {
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
    <S.Skill>
      <S.Header>
        <S.Name>{title}</S.Name>
        <S.ProgressPercentage>
          {value === 0 ? "NaN" : value}
          {bonus > 0 && <span> + {bonus}</span>}%
        </S.ProgressPercentage>
      </S.Header>
      <S.ProgressBar $value={value} $bonus={bonusWidth} />
    </S.Skill>
  );
};

export default ProgressBar;
