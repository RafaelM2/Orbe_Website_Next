import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  overflow-x: hidden;
}

a {
  color: inherit;
  text-decoration: none;
}

::-webkit-scrollbar {
  width: 0.5rem;
  height: 0.5rem;
  background-color: #e0e0e0;
  border-radius: 4rem;
}

::-webkit-scrollbar-thumb {
  background-color: #c0bdbd;
  border-radius: 2rem;
}



`;
