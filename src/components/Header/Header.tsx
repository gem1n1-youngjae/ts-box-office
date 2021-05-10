import React from "react";
import * as S from "./Style";

const Header: React.FC = () => {
  return (
    <S.Positioner>
      <S.Group_flex>
        <S.Logo_default>
          <S.Logo_ts_movie>로고</S.Logo_ts_movie>
        </S.Logo_default>
      </S.Group_flex>
    </S.Positioner>
  );
};

export default Header;
