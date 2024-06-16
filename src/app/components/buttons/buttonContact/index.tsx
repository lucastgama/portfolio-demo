import * as S from "./styles";

interface BtnContactProps {
  text: string;
}

const BtnContact = ({ text}: BtnContactProps) => {
  const scrollToSection = (id:any) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <S.BtnContact>
      <S.BtnText>
        <a
          href={`${text}`}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection(text.replace(/\s+/g, "").toLowerCase());
          }}
        >
          {text}
        </a>
      </S.BtnText>
    </S.BtnContact>
  );
};

export default BtnContact;
