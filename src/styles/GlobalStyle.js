import { createGlobalStyle } from "styled-components";
import { modernNormalize } from "styled-modern-normalize";

const GlobalStyle = createGlobalStyle`
  ${modernNormalize}
  @import url("https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&display=swap");
  :root {
    /* Colors */
  --bg-color: #F5F5F5;
  --card-color: white;
  --soft-orange: #C97C36;
  --bright-orange: #EC733F;
  --teal: #00C9AC;
  --light-grey: #E0E0E0;
  --dark-grey: #6D6D6D;
  --font-color: #6D6D6D;
  --black-font: #292929;

  /* Fonts */
  --accent-font:  Cursive; /* WHAT FONT SHOULD WE HAVE HERE */
  --main-font: "Open sans";
  --backup-font: "cursive";
  }

  body {
    background-color: var(--bg-color);
    color: var(--font-color);
    font-family: var(--main-font);
    display: block;
    margin: 0;
    padding: 0;
  }

  h1{
    font-size: 24px;
    font-weight: 700;
    margin: 0;
  }
  p{
    font-size: 16px;
    margin: 0;

    @media only screen and (max-width: 700px) {
    font-size: 16px;
  }
  }
  h2{
    font-size: 24px;
    font-weight: 400;
    margin: 0;

    @media only screen and (max-width: 700px) {
    font-size: 16px;
    font-weight: 600;
  }
  }
  h3{
    margin: 0;
    line-height: 24px;
    font-size: 16px;
    font-weight: 400;
    @media only screen and (max-width: 700px) {
    font-size: 16px;
    font-weight: 400;
    }
  }
  h5{
    font-size: 12px;
    margin: 0;
    font-weight: 400;
  }
`;

export default GlobalStyle;
