import styled from "@emotion/styled";

export const SettingWindow = styled.div`
  position: absolute;
  top: 50%;
  left: 268px;
  width: 582px;
  margin-top: -28px;
  display: flex;
  input {
    height: 54px;
    border: 2px solid #1fa4fc;
    padding: 0 4px;
    font-family: "Gugi", cursive;
    font-size: 28px;
    border-radius: 2px;
    text-align: right;
    &:focus {
      outline: 0;
      box-shadow: 0 4px 9px 0 rgba(0, 0, 0, 0.1);
    }
  }
  input[name*="year"] {
    width: 160px;
  }
  input[name*="month"] {
    width: 110px;
  }
  input[name*="date"] {
    width: 110px;
  }
`;

export const DateText = styled.span`
  font-size: 28px;
  display: flex;
  align-items: center;
  padding: 0 10px;
`;
