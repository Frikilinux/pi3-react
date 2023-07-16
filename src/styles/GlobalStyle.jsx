import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    --blue: #0055ff;
    --celeste: #3db8f6;
    --aqua: #17d2e0;
    --white: #fefefe;
    --red: #ff5353;
    --dark: #201e20;
    --lightDark: #2c2d31;
    --grey: #989898;
    --green: #13c581;
    --toastify-font-family: 'Montserrat';
  }

  html{
    scroll-behavior: smooth;
  }

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  border: none;
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
