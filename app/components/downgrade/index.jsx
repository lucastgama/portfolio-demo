import { useContext, useState } from "react";
import * as S from "./styles";
import { SkillContext } from "../../context/skillContext";

const Downgrade = ({ title, description, value, icon }) => {
  const [isActive, setIsActive] = useState(false);
  const context = useContext(SkillContext);

  if (!context) {
    throw new Error("Downgrade must be used within an ActionProvider");
  }

  const { Downgrade } = context;

  const information = `${title}: ${description}`;

  const handleClick = () => {
    setIsActive((current) => !current);
    Downgrade(isActive ? -value : value);
  };

  return (
    <S.SquareDowngrade
      className={isActive ? "active" : ""}
      onClick={handleClick}
      title={information}
    >
      <S.Icon src={icon} alt={title} />
    </S.SquareDowngrade>
  );
};

export default Downgrade;
