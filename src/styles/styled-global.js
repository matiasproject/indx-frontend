import { createGlobalStyle } from 'styled-components';
import reset from './reset-style';

const StyledGlobal = createGlobalStyle`
  ${reset}
  body {
    margin: 0;
    padding: 0;
    background: rgba(255,255,255,1);
    height: 100vh;
  }
`;

export default StyledGlobal;
