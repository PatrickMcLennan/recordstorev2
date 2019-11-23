import { createGlobalStyle, css, GlobalStyleComponent } from 'styled-components';
// import Lato from 'Font/Lato-Black';
// import test from 'Image/tester';

export const GlobalStyle: GlobalStyleComponent<any, any> = createGlobalStyle`

    @font-face {
        font-family: 'Lato';
        font-style: normal;
        font-weight: 900;
        src: url('../assets/fonts/Lato-Black.ttf') format('ttf');
    }
    @font-face {
        font-family: 'Lato';
        font-style: normal;
        font-weight: 700;
        src: url('../assets/fonts/Lato-Bold.ttf') format('ttf');
    }
    @font-face {
        font-family: 'Lato';
        font-style: normal;
        font-weight: 500;
        src: url('../assets/fonts/Lato-Regular.ttf') format('ttf');
    }
    @font-face {
        font-family: 'Lato';
        font-style: normal;
        font-weight: 300;
        src: url('../assets/fonts/Lato-Light.ttf') format('ttf');
    }
    @font-face {
        font-family: 'Lato';
        font-style: normal;
        font-weight: 100;
        src: url('../assets/fonts/Lato-Thin.ttf') format('ttf');
    }

    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Lato';
    }
    html {
        box-sizing: border-box
    }
    #root {
        min-height: 100vh;
        overflow-x: hidden;
        position: relative;
    }
    main {
        display: block;
        padding: 0 10%;
        font-family: 'Lato';
    }
    ul {
        list-style-type: none;
    }
    a,
    a:visited {
        color: inherit;
        text-decoration: none;

    }
`;

export const theme: Function = (mainHeight: number): object => {
  return {
    // Layout
    flexin: (jc: string = `center`, ai: string = `center`, fd: string = `row`, fw: string = `nowrap`) =>
      css`
        display: flex;
        justify-content: ${jc};
        align-items: ${ai};
        flex-direction: ${fd};
        flex-wrap: ${fw};
      `,
    headerFooter: css`
      padding-top: 10px;
      padding-bottom: 10px;
      box-shadow: 1px 0 5px rgba(0, 0, 0, 0.5);
    `,
    mainHeight: css`
      min-height: ${mainHeight}px;
    `,
    mainPadding: css`
      padding-left: 5%;
      padding-right: 5%;
    `
  };
};
