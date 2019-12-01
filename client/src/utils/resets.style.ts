import { createGlobalStyle, css, GlobalStyleComponent } from 'styled-components';

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
        overflow-x: hidden;
                    /* 100vh - Header & Footer Height */
        min-height: calc(100vh - 59px - 42.3281px);

        h2:first-of-type {
            display: inline-block;
            position: relative;
            margin-bottom: 30px;
            font-size: 32px;
            font-weight: 300;
            text-transform: lowercase;

            &::after {
                position: absolute;
                top: calc(100% + 1px);
                bottom: 1px;
                height: 1px;
                width: 100%;
                content: '';
                display: block;
                background-color: white;
            }
        }
    }
    ul {
        list-style-type: none;
    }
    a,
    a:visited {
        color: inherit;
        text-decoration: none;
    }
    button {
        background: none;
        border: none;
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
      min-height: calc(100vh - 67px - 22.3821px);
    `,
    mainPadding: css`
      padding-left: 5%;
      padding-right: 5%;
    `,

    // Colors
    mainDarkBlue: 'rgb(10,42,103)',

    // Border Animation
    borderSettings: css`
      position: relative;
      border: none;

      &:hover {
        span[data-testid='top-border'] {
          top: 0;
          right: -7.5px;
          left: 7.5px;
        }
        span[data-testid='right-border'] {
          top: 7.5px;
          right: 0;
          bottom: -7.5px;
        }
        span[data-testid='bottom-border'] {
          right: 7.5px;
          bottom: 0;
          left: -7.5px;
        }
        span[data-testid='left-border'] {
          top: -7.5px;
          bottom: 7.5px;
          left: 0;
        }
      }
    `,

    // Generic styling for Button hover/Focus
    buttonAnimation: css`
      transition: all 0.3s ease-in-out;

      &:hover,
      &:focus {
        background-color: white;
        border: 1px solid ${({ theme: { darkBlue } }) => darkBlue};

        > * {
          color: ${({ theme: { darkBlue } }) => darkBlue};
          color: ${({ theme: { darkBlue } }) => darkBlue};
        }

        svg {
          cursor: pointer;
          transition: all 0.3s ease-in-out;

          &:hover {
            transform: scale(1.1);
          }

          & > * {
            fill: ${({ theme: { darkBlue } }) => darkBlue};
          }
        }
      }
    `,

    // Main White Text Input, with Red background Error
    whiteTextInput: css<{ inputError?: boolean }>`
      padding: 10px;
      background-color: rgba(255, 255, 255, 0.75);
      border: 1px solid white;
      box-shadow: inset 1px 1px 4px rgba(0, 0, 0, 0.5);
      color: ${({ theme: { mainDarkBlue } }) => mainDarkBlue};
      font-size: 20px;
      line-height: 22px;
      transition: all 0.3s ease-in-out;

      ${({ inputError }) =>
        inputError &&
        css`
          background-color: rgba(231, 76, 60, 0.7);
        `}
    `,

    checkBox: css<{ currentlyChecked: boolean }>`
      border: 1px solid white;
      background-color: none;

      &::after {
        content: '\\2713';
        opacity: 0;
        transform: translate(-50%, -50%);
        transition: all 0.2s ease-in-out;
        ${({ currentlyChecked }) =>
          currentlyChecked &&
          css`
            opacity: 1;
          `}
      }
    `,

    // Main ul/li dropdown, white, transperant hover
    mainDropdownUl: css`
      transform-origin: right;
      transition: all 0.3s ease-in-out;

      li {
        background-color: white;
        border: 1px solid white;
        color: ${({ theme: { mainDarkBlue } }) => mainDarkBlue};
        font-weight: 500;
        letter-spacing: 0.75px;
        text-transform: uppercase;
        transition: all 0.1s ease-in-out;
        white-space: nowrap;
        z-index: 100;

        & > a,
        & > button {
          display: block;
          padding: 10px 20px;
        }

        &:hover {
          background-color: transparent;
          color: white;
        }
      }
    `,

    /**
     * TYPOGRAPHY
     */
    mainH2: css`
      font-size: 35px;
    `
  };
};
