import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    --blue: #0a2463;
    --celeste: #3e92cc;
    --white: #fffaff;
    --red: #d8315b;
    --dark: #1e1b18;
  }

  html{
    scroll-behavior: smooth;
  }

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

  body {
  background: var(--dark);
  font-family: 'Montserrat', sans-serif;
  color: var(--white);
    -webkit-tap-highlight-color: transparent;
  overflow-x: hidden;
  }

  a {
  text-decoration: none;
  }

  a:visited {
  color: white;
  }

  li {
  list-style: none;
  }
`
