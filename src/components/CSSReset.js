import { createGlobalStyle } from "styled-components";

export const CSSReset = createGlobalStyle`
/* Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
/* NextJS */
html {
  display: flex;
  flex-direction: column;
  min-height: 100%;
}
body {
  display: flex;
  flex: 1;
  font-family: 'Open Sans', sans-serif;
}
#__next {
  display: flex;
  flex: 1;
}
/* Globals */
button,
a {
  text-decoration: none;
  opacity: 1;
  transition: .3s;
  &:hover,
  &:focus {
    opacity: .5;
  }
}
`;