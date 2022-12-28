import { createGlobalStyle } from 'styled-components';
import reset from './reset-style';
import theme from './styled-theme';

const StyledGlobal = createGlobalStyle`
  ${reset}
  body {
    margin: 0;
    padding: 0;
    background: rgba(255,255,255,1);
    height: 100vh;
    font-family: sans-serif;
  }

  a {
    color: ${theme.colors.blue};
  }
`;

export default StyledGlobal;
