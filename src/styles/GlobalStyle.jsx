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
    color-scheme: dark;
  }

  html{
    /* scrollbar-gutter: stable both-edges; */
    scroll-behavior: smooth;
  }

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  border: none;
  outline: none;
}

  body {
  background: var(--dark);
  font-family: 'Montserrat', sans-serif;
  color: var(--white);
    -webkit-tap-highlight-color: transparent;
  overflow-x: hidden;
  overflow-y: hidden; /* Hide vertical scrollbar */
  }

  body::-webkit-scrollbar {
  display: none;
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
