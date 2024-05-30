import { useContext, useState } from "react";
import { SkillContext } from "../../context/skillContext";
import * as S from "./styles";
import { useEffect } from "react";

const Upgrade = (props) => {
  const [isActive, setIsActive] = useState(false);

  const { Upgrade, downgradeValue, setBonusValue } = useContext(SkillContext);

  const information = `${props.title}: ${props.description}`;

  const handleClick = () => {
    btnActive();
    skillActive();
  };

  function btnActive() {
    downgradeValue <= 4 && setIsActive((current) => !current);
  }

  function skillActive() {
    let value;
    value = isActive ? -props.value : props.value;
    Upgrade(value);

  }
  useEffect(() => {
    if (downgradeValue >= 4) {
      setIsActive(false);
      setBonusValue(0);
    }
  }, [downgradeValue, setBonusValue]);

  return (
    <S.SquareUpgrade
      className={isActive ? "active" : ""}
      onClick={handleClick}
      title={information}
    >
      <S.Icon src={props.icon} alt={props.title} />
    </S.SquareUpgrade>
  );
};

export default Upgrade;
