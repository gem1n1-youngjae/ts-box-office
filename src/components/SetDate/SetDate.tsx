import * as React from "react";
import * as S from "./Style";
import * as Movie from "../../Api/GetMovie";

interface Props {}

const SetDate: React.FC = (props: Props) => {
  const [toDay, setToDay] = React.useState(new Date());
  const [movieDate, setMvieDate] = React.useState({
    year: toDay.getFullYear(),
    month: toDay.getMonth() + 1,
    day: toDay.getDate(),
  });
  const onChange = (e?: any) => {
    const { value, name } = e.target;
    setMvieDate({
      ...movieDate,
      [name]: value,
    });
  };
  const changeDate = () => {
    const [inputYear, inputMonth, inputDate] = Object.values(movieDate);
    setMvieDate({
      year: inputYear,
      month: inputMonth,
      day: inputDate,
    });
    console.log(`movieDate`, movieDate);
    Movie.GetMovieData(movieDate);
  };
  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") {
      changeDate();
    }
  };
  return (
    <S.SettingWindow>
      <input
        type="number"
        name="year"
        onKeyPress={handleKeyPress}
        onChange={onChange}
        value={movieDate.year}
      />
      <S.DateText>년</S.DateText>
      <input
        type="number"
        name="month"
        onKeyPress={handleKeyPress}
        onChange={onChange}
        value={movieDate.month}
      />
      <S.DateText>월</S.DateText>
      <input
        type="number"
        name="day"
        onKeyPress={handleKeyPress}
        onChange={onChange}
        value={movieDate.day}
      />
      <S.DateText>일</S.DateText>
    </S.SettingWindow>
  );
};

export default SetDate;
