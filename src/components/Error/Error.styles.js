import styled from 'styled-components';
import { rem } from 'polished';

export const StyledError = styled.section`
  height: 100vh;
  display: grid;
  place-content: center;
  text-align: center;
  max-width: 300px;
  margin: 0 auto;
  > h2 {
    color: ${({ theme }) => theme.colors.gray};
    font-size: ${({ theme }) => theme.sizes.title};
    font-weight: 500;
    margin-bottom: ${rem('20px')};
  }
  p {
    font-size: ${({ theme }) => theme.sizes.subTitle};
    line-height: ${({ theme }) => theme.lineHeight.subTitle};
    color: ${({ theme }) => theme.colors.gray};
    > i {
        margin-top: ${rem('20px')};
        display: block;
        padding: ${rem('10px')};
        border: 1px solid red;
        background-color: #fbf6f7;
        color: red;
    }
  }
`;
