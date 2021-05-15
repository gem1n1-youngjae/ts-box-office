import * as React from "react";
import * as S from "./Style";

interface Props {
  setDate: Function;
}

const SetDate: React.FC = (props: Props) => {
  return (
    <S.SettingWindow>
      <input type="number" name="year" size={20} />
      <S.DateText>년</S.DateText>
      <input type="number" name="month" size={20} />
      <S.DateText>월</S.DateText>
      <input type="number" name="date" size={20} />
      <S.DateText>일</S.DateText>
    </S.SettingWindow>
  );
};

export default SetDate;
