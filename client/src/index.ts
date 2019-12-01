import { createElement } from 'react';
import { render } from 'react-dom';
import styled, { css } from 'styled-components';

import App from './App';

const ROOT = document.querySelector('#root');

render(createElement(App), ROOT);
