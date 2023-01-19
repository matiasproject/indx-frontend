import styled from 'styled-components';
import { rem } from 'polished';

export const StyledHeader = styled.header`
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
  color: ${({ theme }) => theme.colors.blue};
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: -1px 2px 8px -5px rgba(224,224,224,0.73);
  position: fixed;
  width: 100%;
  top: 0; 
  left: 0;
  right: 0;
  z-index: 3;
  h1 {
    font-size: ${({ theme }) => theme.sizes.title};
    font-weight: 600;
  }
  div {
    display: flex;
    align-items: center;
    > span:first-child {
      margin-right: 20px;
    }
  }
  > nav {
    width: 100%;
    max-width: ${({ theme }) => theme.breakpoints.large};
    margin: 0 auto;
    padding: ${rem('20px')};
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
  }
`;
