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
        color: white;
        font-family: 'Lato';
    }
    html {
        box-sizing: border-box
    }
    #root {
        min-height: 100vh;
        overflow-x: hidden;
        position: relative;
        background-image: linear-gradient(to bottom, rgb(10,42,103), rgb(73, 173, 247))
    }
    main {
        display: block;
        padding: 15px 7.5% 100px 7.5%;
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
      box-shadow: 1px 0 5px rgba(255, 255, 255, 0.5);
    `,
    mainHeight: css`
      min-height: ${mainHeight}px;
    `,
    mainPadding: css`
      padding-left: 5%;
      padding-right: 5%;
    `,
    // Colors
    darkBlue: 'rgb(10,42,103)',
    // Border Animation
    borderSettings: css`
      position: relative;
      border: none;

      &:hover {
        span[data-testid='top-border'] {
          right: -7.5px;
          left: 7.5px;
        }
        span[data-testid='right-border'] {
          top: 7.5px;
          bottom: -7.5px;
        }
        span[data-testid='bottom-border'] {
          right: 7.5px;
          left: -7.5px;
        }
        span[data-testid='left-border'] {
          top: -7.5px;
          bottom: 7.5px;
        }
      }
    `
  };
};
