import * as React from "react";
import * as S from "./Style";
import * as Movie from "../../Api/GetMovie";

interface Props {}

const SetDate: React.FC = (props: Props) => {
  const [toDay, setToDay] = React.useState(Date.now());
  const [movieDate, setMvieDate] = React.useState({
    year: 0,
    month: 0,
    day: 0,
  });
  const onChange = (e: any) => {
    const { value, name } = e.target;
    setMvieDate({
      ...movieDate, // 기존의 input 객체를 복사한 뒤
      [name]: value, // name 키를 가진 값을 value 로 설정
    });
  };
  return (
    <S.SettingWindow>
      <input
        type="number"
        name="year"
        onChange={onChange}
        value={movieDate.year}
      />
      <S.DateText>년</S.DateText>
      <input
        type="number"
        name="month"
        onChange={onChange}
        value={movieDate.month}
      />
      <S.DateText>월</S.DateText>
      <input
        type="number"
        name="day"
        onChange={onChange}
        value={movieDate.day}
      />
      <S.DateText>일</S.DateText>
    </S.SettingWindow>
  );
};

export default SetDate;
