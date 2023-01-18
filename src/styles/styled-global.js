import styled, { createGlobalStyle } from 'styled-components';
import reset from './reset-style';
import theme from './styled-theme';
import { rem } from 'polished';

export const Button = styled.button`
  color: white;
  font-size: ${rem('14px')};
  text-transform: uppercase;
  font-weight: 300;
  cursor: pointer;
  padding: ${props => props.padding || '20px 40px'};
  display: block;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.mediumBlue};
  border: 0;
  width: ${props => props.width || 'auto'};
  @media only screen and (max-width: 640px) {
    width: 100%;
  }
  border-radius: 100px;
  margin: 20px 0;
`;

export const StyledLoading = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  > p {
    font-size: ${({ theme }) => theme.sizes.subTitle};
    line-height: ${({ theme }) => theme.lineHeight.subTitle};
    color: ${({ theme }) => theme.colors.gray};
    font-weight: 500;
  }
`;

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
