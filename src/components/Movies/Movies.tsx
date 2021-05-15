import React, { useEffect } from "react";
import * as S from "./Style";
import * as MovieApi from "../../Api/GetMovie";

interface Props {}

const Movies = (props: Props) => {
  const date = "20200101";
  useEffect(() => {
    console.log(MovieApi.GetMovieData(date));
  }, []);

  return <S.Container>TS MOVIE!</S.Container>;
};

export default Movies;
