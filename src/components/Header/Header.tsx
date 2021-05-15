import React from "react";
import { SetDate } from "..";
import { TsMovieLogo } from "../../Assets/index";
import * as S from "./Style";

interface Props {
  setDate: Function;
}

const Header = (props: Props) => {
  return (
    <S.Positioner>
      <S.Group_flex>
        <S.Logo_default>
          <S.Logo_ts_movie>
            <TsMovieLogo />
          </S.Logo_ts_movie>
        </S.Logo_default>
        <SetDate setDate={props.setDate}></SetDate>
      </S.Group_flex>
    </S.Positioner>
  );
};

export default Header;
