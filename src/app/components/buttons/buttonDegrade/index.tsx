import * as S from "./styles";

interface BtnDegradeProps {
  text: string;
}

const BtnDegrade = ({ text }: BtnDegradeProps) => {
  const PDF_URL = "./doc/cv_lucas_gama.pdf";
  const handleDownload = async () => {
    try {
      const response = await fetch(PDF_URL);
      const blob = await response.blob();
      const fileURL = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = fileURL;
      a.download = 'cv_lucasgama.pdf';
      a.click();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <S.BtnBorder onClick={handleDownload}>
      <S.BtnText>{text}</S.BtnText>
    </S.BtnBorder>
  );
};

export default BtnDegrade;
