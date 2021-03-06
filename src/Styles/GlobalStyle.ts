import { css } from "@emotion/react";

const GlobalStyle = css`
  @import url("https://fonts.googleapis.com/css2?family=Gugi&display=swap");
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    font-family: "Gugi", cursive;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
    font-family: "Gugi", cursive;
  }

  body {
    line-height: 1;
    font-family: "Gugi", cursive;
  }

  ol,
  ul {
    list-style: none;
    font-family: "Gugi", cursive;
  }

  blockquote,
  q {
    quotes: none;
    font-family: "Gugi", cursive;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
    font-family: "Gugi", cursive;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
    font-family: "Gugi", cursive;
  }
`;

export default GlobalStyle;
