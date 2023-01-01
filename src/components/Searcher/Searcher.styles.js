import styled from 'styled-components';
import { rem } from 'polished';

export const StyledSearcher = styled.section`
  padding: ${rem('20px')};
  display: flex;
  align-items: center;
  justify-content: right;
  box-sizing: border-box;
  position: fixed;
  top: 68px; 
  left: 0;
  right: 0;
  z-index: 2;
  > span {
    padding: 8px;
    display: block;
    background-color: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.white};
    margin-right: 10px;
    border-radius: 50px;
    min-width: 40px;
    text-align: center;
    box-shadow: -1px 2px 8px -5px rgba(224,224,224,0.73);
  }
  > input {
    border: 0;
    background-color:  ${({ theme }) => theme.colors.white};
    border-radius: 10px;
    padding: 9px 40px 9px 20px;
    width: 300px;
    box-shadow: -1px 2px 8px -5px rgba(224,224,224,0.73);
    font-size: ${({ theme }) => theme.sizes.subTitle};
    line-height: ${({ theme }) => theme.lineHeight.subTitle};
    color: ${({ theme }) => theme.colors.gray};
    border: 1px solid ${({ theme }) => theme.colors.mediumGray};
    &:focus {
      outline: none;
    }
  }
`;
