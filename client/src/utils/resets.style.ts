import { createGlobalStyle, css, GlobalStyleComponent } from 'styled-components';

export const GlobalStyle: GlobalStyleComponent<any, any> = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box
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
    }
`;

export const theme: object = {
  // Layout
  flexin: (jc: string = `center`, ai: string = `center`, fd: string = `row`, fw: string = `nowrap`) =>
    css`
      display: flex;
      justify-content: ${jc};
      align-items: ${ai};
      flex-direction: ${fd};
      flex-wrap: ${fw};
    `
};
